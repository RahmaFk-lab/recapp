import mimetypes
import os
import fitz  # this is pymupdf
import spacy



newline = '''^\S$''' #pattern des elements non whitespace
punctuations = '''!()-[]{};:'«»"\,"<>./?@#$%^&*_~+''' #pattern pour la pnctuation
cleanData=[] #une liste vide la ou on va stocker les mots
nlp = spacy.load("en_core_web_sm") #appel a la bibliotheque de la language francaise
all_stopwords = nlp.Defaults.stop_words #appel au stop words francais
tokenizer = nlp.tokenizer

def extract_text_from_pdf(file):
    with fitz.open(file) as doc: #ouvrir le CV en PDF avec la bib fitz
        text = "" #declarer une variable texte vide
        for page in doc:
            text += page.getText()
            splitword= text.split()
            splitlines = text.splitlines()#parcourir le document page par page et extracter le texte
            # print(text) #visualisation du texte pour tester
            # with open("PDF_to_Text.txt", "w", encoding="utf-8") as file: #creation d'un nouveau fichier .txt
            #     file.write(text) #stockage du texte extrait dans le fichier .txt

    return text,splitword,splitlines

def Data_cleaning(text):
    """
    cette fonction a pour role le filtrage du texte qu'on a obtenue par pdftotext.py
    :param text:
    :return: list de mots netoyés
    """
    NNword=[]
    NumWord=[]
    doc = nlp(text)
    for X in doc:
        word = X.text
        pos = X.pos_
        #print(word , pos)
        if pos == "PROPN":
             NNword.append(word)
        if pos =="NUM":
            NumWord.append(word)
    # for w in NNword:
    #     if not (w.__contains__("\n") or w in all_stopwords or w in punctuations or w.isdigit()):
    #         cleanData.append(word)


    #print(NNword)
    return NNword,NumWord
