from pydantic import BaseModel, Field
from typing import List, Optional
from enum import Enum

class DegreeLevel(str, Enum):
    BACHELOR = "Bachelor's"
    MASTER = "Master's"
    PHD = "PhD"
    POSTDOC = "Postdoc"

class ScholarshipType(str, Enum):
    FULL_RIDE = "full ride"
    PARTIAL = "partial"
    MERIT_BASED = "merit-based"
    NEED_BASED = "need-based"
    RESEARCH_BASED = "research-based"
    ATHLETIC = "athletic"

class StudyFormat(str, Enum):
    IN_PERSON = "in-person"
    ONLINE = "online"
    HYBRID = "hybrid"

class ScholarshipListItem(BaseModel):
    url: str = Field(description="A link to scholarship details.")
    title: str = Field(description="The name of the scholarship program.")
    
class ScholarshipDetail(BaseModel):
    title: str = Field(description="The official name of the scholarship program.")
    url: str = Field(
        description="A link to scholarship details."
    )
    degree: List[str] = Field(
        description="Academic level supported by the scholarship. Valid options are: Bachelor's, Master's, PhD, Postdoc"
    )
    deadline: str = Field(
        description="Final date by which the application must be submitted (format: YYYY-MM-DD)."
    )
    registration_start_date: str = Field(
        description="Date when the application process opens (format: YYYY-MM-DD)."
    )
    description: str = Field(
        description="A concise overview of the scholarship's purpose, sponsor, and target audience."
    )
    requirements: List[str] = Field(
        description="List of mandatory eligibility criteria (e.g., academic qualifications, language proficiency, experience)."
    )
    country: List[str] = Field(
        description="Full official name of the country where the scholarship is offered. Do NOT use abbreviations. For example: United Kingdom, not UK."
    )
    type: str = Field(
        description="Indicates the funding structure of the scholarship. Valid options are: full ride, partial, merit-based, need-based, research-based, athletic"
    )
    benefits: List[str] = Field(
        description="Specific advantages provided by the scholarship (e.g., tuition waiver, stipend, travel allowance)."
    )
    must_relocate: bool = Field(
        description="Indicates whether the scholarship requires the student to relocate to the study location."
    )
    study_format: str = Field(
        description="The format of the study, valid formats are: in-person, online, hybrid"
    )

class ScholarshipList(BaseModel):
    scholarships: List[ScholarshipListItem]

# User profile models
class UserAchievement(BaseModel):
    title: str = Field(description="Title of the achievement")
    description: str = Field(description="Detailed description of the achievement")
    year: int = Field(description="Year when the achievement was earned")

class UserProfile(BaseModel):
    full_name: str
    email: str
    gpa: float = Field(ge=0.0, le=4.0)
    major: str
    current_degree: str
    target_degree: str = Field(description="Degree the user is applying for scholarships")
    institution: str = Field(description="Current educational institution")
    language_proficiencies: List[str] = Field(description="List of languages and proficiency levels")
    achievements: List[UserAchievement] = Field(default_factory=list)
    research_experience: Optional[str] = None
    work_experience: Optional[str] = None
    preferred_countries: List[str] = Field(default_factory=list)
    preferred_study_format: Optional[str] = None

class MotivationLetterRequest(BaseModel):
    scholarship_title: str
    scholarship_provider: str
    user_profile: UserProfile
    specific_points: List[str] = Field(description="Specific points to emphasize in the letter")

class CVRequest(BaseModel):
    user_profile: UserProfile
    scholarship_focus: Optional[str] = Field(description="Scholarship area to emphasize in CV")
    cv_style: str = Field(description="Style of CV (academic, professional, etc.)")

class ScholarshipQuestion(BaseModel):
    question_text: str
    scholarship_id: Optional[str] = None  

class ProbabilityAnalysis(BaseModel):
    success_percentage: float = Field(ge=0.0, le=100.0)
    strengths: List[str]
    gaps: List[str]
    improvements: List[str]
    overall_assessment: str