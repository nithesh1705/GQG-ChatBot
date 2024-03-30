import spacy
import csv
from translate import Translator

nlp = spacy.load('en_core_web_md')
questions = []
answers = []

with open('dataset.csv', 'r') as file:
    reader = csv.reader(file)
    next(reader)  # Skip the header row
    for row in reader:
        questions.append(row[0])
        answers.append(row[1])

def get_answer(user_input):
    user_input = user_input.lower()
    doc = nlp(user_input)
    for i, question in enumerate(questions):
        question_doc = nlp(question.lower())
        similarity = doc.similarity(question_doc)
        if similarity > 0.6:
            return answers[i]
    return "Sorry, I couldn't find an answer to your question."

def translate(sentence,code):
    translater = Translator(from_lang="en",to_lang=code)
    translated = translater.translate(sentence)
    return translated