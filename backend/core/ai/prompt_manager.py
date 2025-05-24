import os
from dotenv import load_dotenv
from openai import OpenAI
from typing import List, Dict, Any

load_dotenv()
API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=API_KEY)

class PromptManager:

    
    def __init__(self, messages=None, model="gpt-4.1-mini-2025-04-14"):
        self.messages = messages or []
        self.model = model
    
    def add_message(self, role: str, content: str) -> None:
        self.messages.append({"role": role, "content": content})
    
    def set_messages(self, messages: List[Dict[str, str]]) -> None:
        self.messages = messages
    
    def get_messages(self) -> List[Dict[str, str]]:
        return self.messages
    
    def clear_messages(self) -> None:
        self.messages = [msg for msg in self.messages if msg.get('role') == 'system']
    
    def generate(self) -> str:

        response = client.chat.completions.create(
            model=self.model,
            messages=self.messages
        )
        return response.choices[0].message.content
    
    def generate_structured(self, schema: Dict[str, Any]) -> Any:

        response = client.beta.chat.completions.parse(
            model=self.model,
            messages=self.messages,
            response_format=schema
        )
        result = response.choices[0].message.parsed   
        return result
    
    def generate_embeddings(self, text: str) -> List[float]:

        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=text
        )
        return response.data[0].embedding