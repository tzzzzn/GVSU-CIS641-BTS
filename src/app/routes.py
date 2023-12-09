from app import app
from flask import request, jsonify
from app.Config import config
from app import database
from app import notify
import bcrypt
import jwt
from bson import ObjectId

HASH_KEY = config.APP['hash_key']
SECRET_KEY = config.APP['jwt_key']

@app.route('/index')
def index():
    return "Hello World"

@app.route('/getuserdetails',methods=['POST'])
def getuserdetails():
    print('get user details')
    authorization_header=request.headers.get('Authorization')
    if(authorization_header):
        token = authorization_header.split(' ')[1]
    # decoded = jwt.decode(data['jwt_token'],SECRET_KEY,algorithm=["HS256"])
    print(token)
    id=ObjectId(token)
    res = database.get_user_details({'_id':id},{'full_name':1})
    print(res)
    return jsonify({"full_name":res['full_name']})

@app.route('/login', methods=['POST'])
def login():
    print('login')
    email = request.form.get('email')
    password = request.form.get('password')

    user = database.get_user_details({'email': email}, {'_id': 1, 'hashed_password': 1})

    if user and bcrypt.checkpw(password.encode('utf-8'), user['hashed_password']):
        print(user)
        return jsonify({'jwt_token': str(user['_id'])})
    else:
        return jsonify({'message': "Email or password is incorrect"}), 400

@app.route('/signup',methods=['POST'])
def signup():
    try:
        print('signup')
        full_name = request.form.get('full_name')
        mobile_number = request.form.get('mobile_number')
        email = request.form.get('email')
        gender = request.form.get('gender')
        password = request.form.get('password')
        '''We ar encoding the password, which actually converts string to bytes as bcrypt only accepts byte code'''
        hashed_password = bcrypt.hashpw(password.encode('utf-8'),HASH_KEY)
        res = database.add_user({'full_name':full_name,
                    'mobile_number':mobile_number,
                    'email':email,
                    'gender':gender,
                    'hashed_password':hashed_password
        })
        # encoded = jwt.encode({"jwt_token": str(res)}, config.APP['jwt_key'], algorithm="HS256")
        return jsonify({'jwt_token':str(res)})
    except Exception as e:
        print(e)
        return jsonify({'message':'signup failed'})
    
@app.route('/addTask',methods=['POST'])
def addTask():
    print("addTask")
    try:
        authorization_header=request.headers.get('Authorization')
        if(authorization_header):
            token = authorization_header.split(' ')[1]
        data=request.get_json()
        data['userId']=ObjectId(token)
        print(data)
        data['task_status'] = "new"
        res = database.add_task(data)
        print(res)
        return jsonify({'message':'task added sucessfully'})
    except Exception as e:
        print(e)
        return jsonify({'message':'failed to add task'})

@app.route('/get_tasks',methods=['GET'])
def get_tasks():
    print('get tasks')
    date_param = request.args.get('date')
    authorization_header=request.headers.get('Authorization')
    if(authorization_header):
        token = authorization_header.split(' ')[1]
    all_tasks = []
    search_params = {'userId':ObjectId(token), 'start_date':date_param}
    to_do_tasks = database.get_task("to_do",search_params)
    all_tasks += list(to_do_tasks)
    focused_tasks = database.get_task("focused",search_params)
    all_tasks+=list(focused_tasks)
    search_params['start_date'] = {'$lte': date_param}
    search_params['end_date'] = {'$gte': date_param}
    recurring_tasks = database.get_task("recurring",search_params)
    all_tasks+=list(recurring_tasks)
    sorted_tasks = sorted(all_tasks, key=lambda x: x['start_time'])
    print(sorted_tasks)
    for task in sorted_tasks:
        task['_id'] = str(task['_id'])
        task['userId'] = str(task['userId'])
    return jsonify({'tasks':sorted_tasks})

@app.route('/updateTask',methods=['POST'])
def updateTask():
    authorization_header=request.headers.get('Authorization')
    if(authorization_header):
        userId = ObjectId(authorization_header.split(' ')[1])
    data=request.get_json()
    res = database.update_task(data['task_type'],ObjectId(data['_id']),data['update'])
    return jsonify({'message':'updated'})

@app.route('/deleteTask',methods=['POST'])
def deleteTask():
    authorization_header=request.headers.get('Authorization')
    if(authorization_header):
        userId = ObjectId(authorization_header.split(' ')[1])
    data=request.get_json()
    res = database.delete_task(data['task_type'],ObjectId(data['_id']))
    return jsonify({'message':'deleted'})
