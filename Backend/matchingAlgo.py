import ssl
import json
import pymongo
from pymongo import MongoClient
import pymongo
import jsonpickle
import sys

def sortFunction(value):
    return value["Score"]

client = MongoClient('mongodb+srv://admin:admin@cluster0.ecky0.mongodb.net/MymatchingApp?retryWrites=true&w=majority',
                     ssl_cert_reqs=ssl.CERT_NONE)
#print("Mongo database is connected")
db = client.MymatchingApp
coll_offre = db.dataoffres
coll_cv = db.datacvs
input = sys.argv[1]
candidat = json.loads(input)
#print( candidat["name"])
#candidat = coll_cv.find().sort("_id", -1).limit(1)
skills_cv=candidat["skill"]
resultat=[]
for item in coll_offre.find():
    list = set(item["skill"]) & set(skills_cv)
    list2 = set(item["addr"]) & set(candidat["addr"])
    #print(item["name"])
        #print("Skills that matchs :", list)
        #print("Adresse :", item["addr"])
    score2 = (len(list) * 0.6)
    score = (80 * len(list)) / len(item["skill"]) + (20 * len(list2) / len(item["addr"]))
        #print(i.__getitem__("name"), ": score", round(score), "%")
    
    matching_res = {"Societe":item["name"],"Addr":item["addr"],"Score":round(score),"poste":item["poste"]}
    resultat.append(matching_res)

sorted_res = sorted(resultat, key=sortFunction, reverse=True)

for item in sorted_res:
    json_data = json.dumps(item)
    print(json_data)
"""

sorted_res = sorted(resultat, key=sortFunction, reverse=True)

    # lines = sorted(resultat, key=lambda k: k[matching_res].get('Score', 0), reverse=True)
for item in sorted_res[:5]:
    print(item) """