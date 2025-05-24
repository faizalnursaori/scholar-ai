import os
from typing import List, Dict
from dotenv import load_dotenv
from chromadb import AsyncHttpClient
from chromadb.utils.embedding_functions import OpenAIEmbeddingFunction

load_dotenv()

openai_ef = OpenAIEmbeddingFunction(
    model_name="text-embedding-3-large",
    api_key=os.getenv("OPENAI_API_KEY")
)

chroma = AsyncHttpClient(
    host="localhost",
    port=5010,
    embedding_function=openai_ef
)

COLLECTION_NAME = "scholarships"

async def get_collection():
    return await chroma.get_or_create_collection(name=COLLECTION_NAME)

async def add_scholarship_to_db(
    id: str,
    title: str,
    description: str,
    metadata: Dict
):
    full_text = f"{title}\n{description}"
    collection = await get_collection()
    await collection.add(
        ids=[id],
        documents=[full_text],
        metadatas=[metadata]
    )

async def search_similar_scholarships(query: str, top_k: int = 5) -> List[Dict]:
    collection = await get_collection()
    results = await collection.query(
        query_texts=[query],
        n_results=top_k
    )

    matches = []
    for i in range(len(results["ids"][0])):
        matches.append({
            "id": results["ids"][0][i],
            "document": results["documents"][0][i],
            "metadata": results["metadatas"][0][i],
            "distance": results["distances"][0][i],
        })
    
    return matches

async def delete_scholarship_by_id(id: str):
    collection = await get_collection()
    await collection.delete(ids=[id])

async def list_all_scholarships() -> List[Dict]:
    collection = await get_collection()
    return await collection.peek()
