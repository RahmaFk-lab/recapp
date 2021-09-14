import fitz
import spacy
nlp = spacy.load("en_core_web_sm")
file = "Bureau\CV_ben slama_Hamdi.pdf"
with fitz.open(file) as doc:  # ouvrir le CV en PDF avec la bib fitz
    text = ""  # declarer une variable texte vide
    for page in doc:
        text += page.getText()

NNword = []
NumWord = []
doc = nlp(text)
for X in doc:
    word = X.text
    pos = X.pos_
    # print(word , pos)
    if pos == "PROPN":
        NNword.append(word)
    if pos == "NUM":
        NumWord.append(word)