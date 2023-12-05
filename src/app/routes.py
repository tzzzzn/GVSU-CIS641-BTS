from app import app
from flask import request, jsonify
from app.Config import config
from app import database
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

@app.route('/login',methods=['POST'])
def login():
    print('login')
    email = request.form.get('email')
    password = request.form.get('password')
    hashed_password = bcrypt.hashpw(password.encode('utf-8'),HASH_KEY)
    res = database.get_user_details({'email':email,'hashed_password':hashed_password},{'_id':1})
    print('res',res)
    if(res!=None):
        print(res)
        return jsonify({'jwt_token':str(res['_id'])})
    return jsonify({'message':"username or password is incorrect"}),400

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
    

