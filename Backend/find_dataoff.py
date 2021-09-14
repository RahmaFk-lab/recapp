import csv
from _csv import reader
import re
import csv

xy=[]
selected=[]
def extract_city(list):
    final=[]
    #inst = re.compile(".*Ecole|.*Tunisia|.*Tunisie|.*Institut|.*école|.*Lycée|.*lycée|.*l'école|.*L'institut|.*d'ingenieurs|.*technicien", re.IGNORECASE)
    r = re.compile(".*Sfax|.*Ariana|.*Béja|.*Ben Arous|.*Bizerte|.*Gabès|.*Gafsa|.*Jendouba|.*Kairouan|.*Kasserine|.*Kébili|.*Kef|.*Mahdia|.*Manouba|.*Médenine|.*Monastir|.*Nabeul|.*Sidi Bouzid|.*Siliana|.*Sousse|.*Tataouine|.*Tozeur|.*Tunis|.*Zaghouan")
    for item in list:
        if r.match(item):
            selected.append(item)
    for city in selected:
        if not final.__contains__(city):
            final.append(city)
    #print(final)
    return final


def extract_names(list):
    names=[]
    with open('names.csv', 'rt', encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            for x in row:
                for item in list:
                    if item.lower().startswith(x) or item.lower().endswith(x):
                        names.append(item)
    return names

def extract_email_number(list):
    emails=[]
    phone=[]
    email = re.compile(r'[\w\.-]+@[\w\.-]+')
    number = re.compile(r'[\+\(]?[1-9][0-9 .(\)]{8,}[0-9]')
    for item in list:
        if email.match(item):
            emails.append(item)
        elif number.match(item):
            phone.append(item)
            #print(cond_num)
    return emails, phone



def extract_skills(list):
    skills=[]
    final=[]
    with open('datacoded.csv', 'rt') as f:
        reader = csv.reader(f)
        #print(reader)
        for row in reader:
            for x in row:
            #print(row)
                for item in list:
                    if item.lower().startswith(x) and item.lower().endswith(x):
                        skills.append(item)
                # for item in list:
                #     if item.lower().startswith(x) or item.lower().endswith(x):
                #          skills.append(item)


    for skill in skills:
        if not final.__contains__(skill):
            final.append(skill)
    #print(final)
    return final
def extract_sujet(list):
    sujets=[]
    r = re.compile(".*developpeur|.*data scientist | .*chef de projet | .*développeur |.*ingenieur | .*Développeur", re.IGNORECASE)
    for item in list:
        if r.match(item):
            sujets.append(item)
    return sujets 
 
""" def extract_sujet(list):
    sujets=[]
    sujets= list[0]
    return sujets  """

""" def extract_sujet(list):
    sujets=[]
    with open('postes.csv', 'rt', encoding="utf-8") as f:
        reader = csv.reader(f)
        for row in reader:
            for x in row:
                for item in list:
                    encoded= item.encode("utf-8")
                    if encoded.startswith(x):
                        sujets.append(encoded)
    return sujets 
 """
