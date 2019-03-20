import json
from pymongo import MongoClient

client = MongoClient("mongodb+srv://admin:CatDog123@nhl-321-pts-0ef8o.mongodb.net/")
db = client.Data_2018
standings = db['Data']


with open('standings.json') as standing_data:
    file_data = json.load(standing_data)

standings.insert_one(file_data)
client.close()
