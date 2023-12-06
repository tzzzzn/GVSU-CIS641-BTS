from app.Config import config
from pymongo import MongoClient
username = config.DATABASE['user']
password = config.DATABASE['password']

uri = f"mongodb+srv://{username}:{password}@intro.fxyymn1.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri)
# Connect to the database
db = client.task_scheduler # db = client['task_scheduler']

def add_user(user):
    res = db.user.insert_one(user)
    print("user added sucessfully")
    return res.inserted_id

def get_user_details(user,details):
    res = db.user.find_one(user,details)
    return res

def add_task(data):
    res = db[data['task_type']].insert_one(data)
    return res.inserted_id

def get_task(collection,search_param):
    res = db[collection].find(search_param)
    return res