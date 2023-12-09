from app.Config import config
from pymongo import MongoClient
username = config.DATABASE['user']
password = config.DATABASE['password']

def connect_to_database():
    try:
        uri = f"mongodb+srv://{username}:{password}@intro.fxyymn1.mongodb.net/?retryWrites=true&w=majority"
        client = MongoClient(uri)
        db = client.task_scheduler # db = client['task_scheduler']
        print("Connected to the database")
        return db
    except ConnectionError as e:
        print(f"Error connecting to the database: {e}")
        raise

db = connect_to_database()

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

def update_task(collection,task_id,update):
    res = db[collection].update_one({'_id':task_id},{"$set":update})
    return res

def delete_task(collection,task_id):
    res = db[collection].delete_one({'_id':task_id})
    return res
