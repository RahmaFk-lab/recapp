import csv
from _csv import reader
import re
import csv

xy=[]
selected=[]
def extract_city(list):
    final=[]
    inst = re.compile(".*Ecole|.*Tunisia|.*Tunisie|.*Institut|.*école|.*Lycée|.*lycée|.*l'école|.*L'institut|.*d'ingenieurs|.*technicien", re.IGNORECASE)
    r = re.compile(".*Sfax|.*Ariana|.*Béja|.*Ben Arous|.*Bizerte|.*Gabès|.*Gafsa|.*Jendouba|.*Kairouan|.*Kasserine|.*Kébili|.*Kef|.*Mahdia|.*Manouba|.*Médenine|.*Monastir|.*Nabeul|.*Sidi Bouzid|.*Siliana|.*Sousse|.*Tataouine|.*Tozeur|.*Tunis|.*Zaghouan")
    for item in list:
        if r.match(item) and not inst.match(item):
            selected.append(item)
    for city in selected:
        if not final.__contains__(city):
            final.append(city)
    #print(final)
    return final


def extract_names(list):
    names=[]
    with open('namescoded.csv', 'rt', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            for x in row:
                for item in list:
                    if item.lower().startswith(x) or item.lower().endswith(x):
                        names.append(item)
    return names

def extract_email(list):
    emails=[]

    email = re.compile(r'[\w\.-]+@[\w\.-]+')
    for item in list:
        if email.match(item):
            emails.append(item)
    return emails
def extract_number(list):

    phone=[]
    number = re.compile('^(\+\d{3}\s)?\(?\d{2}\)?[\s.-]?\d{3}[\s.-]?\d{3}$')
    number1 = re.compile('^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$')
    for item in list:
        if number.match(item) or number1.match(item):
            phone.append(item)
            #print(cond_num)
    return phone

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