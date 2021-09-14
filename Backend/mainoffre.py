import pdftotext
import os
import mimetypes
import find_dataoff
import json
import extract_desc
import sys

#for f in os.listdir("D:\Rahma\Code\/application\server\/uploadsOFFRE"): #parcourir le dossier qui contient les CVs en PDF
f= sys.argv[1]
filetype, _ = mimetypes.guess_type(f) #savoir l'extension de chaque fichier
if filetype == "application/pdf":
    texte, words,lines = pdftotext.extract_text_from_pdf(f)
        #print(texte)
    texte = texte.replace("\n"," ")
    parts = texte.split(".")
        #print(parts)
    des= extract_desc.extract_desc(parts)
        #print(des)
    clean_data, numbers = pdftotext.Data_cleaning(texte)
    email, num= find_dataoff.extract_email_number(words)
        #print(email)
        #print(num)
    skills=find_dataoff.extract_skills(clean_data)
        #print(skills)
    cities = find_dataoff.extract_city(clean_data)
        #print(cities)
    sujet=find_dataoff.extract_sujet(lines)
        #print(sujet[0])
    data = {"Poste":sujet,"Mission":des,"Email":email,"Adresse":cities, "Competences":skills}
    Output = json.dumps(data,ensure_ascii=False)
    getitem = json.loads(Output)
    print(Output)
        #print(getitem["Competences"])