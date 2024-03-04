from pydantic import BaseModel

class question(BaseModel):
    question: str

class translating(BaseModel):
    sentence: str
    code: str