from app import app
from flask import request, jsonify
import bcrypt
from config import config

HASH_KEY = config.APP['hash_key']


@app.route('/index')
def index():
    return "Hello World"

@app.route('/login',methods=['POST'])
def login():
    print('login')
    email = request.form.get('email')
    password = request.form.get('password')
    print(bcrypt.hashpw(password.encode('utf-8'),HASH_KEY))
    return jsonify({'message':"Login Successfull"})

@app.route('/signup',methods=['POST'])
def signup():
    print('signup')
    full_name = request.form.get('full_name')
    mobile_number = request.form.get('mobile_number')
    email = request.form.get('email')
    gender = request.form.get('gender')
    password = request.form.get('password')
    '''We ar encoding the password, which actually converts string to bytes as bcrypt only accepts byte code'''
    hashed_password = bcrypt.hashpw(password.encode('utf-8'),HASH_KEY)
    print(hashed_password)
    print(gender)
    return jsonify({'message':"Signup Successfull"})

