import uvicorn
from fastapi import FastAPI
from controllerGEM import get_answer
from schema import question, translating
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def working():
    return "API Working"

@app.post('/ask')
def askQuestion(ques:question):
    return get_answer(ques.question)

# @app.post('/translate')
# def translater(translating: translating):
#     return translate(translating.sentence,translating.code)

if '__main__'==__name__:
    uvicorn.run(
        'main:app',
        reload=True,
        port=8000,
        host='localhost'
    )