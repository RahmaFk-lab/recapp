import re


def extract_desc(list):
    mis= []
    r = re.compile(".*mission|.*responsabilit√©|.*poste|.*recrut|.*role|.*pour cela|.*vous serez|.*nous recherchons|.*description|.*contexte|.*objectifs|.*activites", re.IGNORECASE)
    for l in list:
        if r.match(l):
            mis.append(l)
    return mis

