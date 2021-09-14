import json

with open('training_dataset_gi.json', 'rt') as f:
    p= json.dumps(f.read(), ensure_ascii=False)
    print(p)