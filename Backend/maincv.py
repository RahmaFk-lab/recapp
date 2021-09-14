import find_data
import pdftotext
import json
import os
import mimetypes
import re
import sys

#print("Start..")
#file= "D:\Rahma\Code\PDF_to_text\work\CV_FADHEL_Ali.pdf"
#for f in os.listdir("D:\Rahma\Code\/application\server"): #parcourir le dossier qui contient les CVs en PDF
#def main(f):
f= sys.argv[1]
#for f in os.listdir("D:\Rahma\Code\/application\server\/uploadsCV"):
filetype, _ = mimetypes.guess_type(f) #savoir l'extension de chaque fichier
if filetype == "application/pdf":
    texte, words,lines = pdftotext.extract_text_from_pdf(f)
    clean_data, numbers=pdftotext.Data_cleaning(texte)
    emails=find_data.extract_email(words)
    number = find_data.extract_number(numbers)
    if not number:
        number.append("")
        #print(emails)
    names=[]
    name = find_data.extract_names(lines)
    for email in emails:
        for n in name:
            for d in clean_data:
                if not name:
                    names.append("no name")
                if not n.startswith(email) and not n.isdigit() and n.startswith(d):
                    names.append(n)
    final=[]
    for name in names:
        if not final.__contains__(name):
            final.append(name)
    if not final:
        str = " "
    else:
        str= final[0]
    cities = find_data.extract_city(clean_data)
        #print(cities)
    skills=find_data.extract_skills(clean_data)
        #print(skills)
    data = {"Name":str,"Email":emails,"Phone":number,"Adresse":cities, "Competences":skills}
    Output = json.dumps(data,ensure_ascii=False)
    print(Output)
    getitem = json.loads(Output)
        #print(getitem)
        #print(getitem["Competences"])
    
#main(sys.argv[0])