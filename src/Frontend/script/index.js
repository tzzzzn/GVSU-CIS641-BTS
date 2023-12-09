const login=document.querySelector('.login');
const signupform=document.querySelector('#signup');
const singup=document.querySelector('.signup');
const loginform=document.querySelector('#login');

const login_email = document.querySelector('#login_email');
const login_password = document.querySelector('#login_password');

const full_name = document.querySelector('#full_name');
const mobile_number = document.querySelector('#mobile_number');
const signup_email = document.querySelector('#signup_email');
const gender = document.querySelector('#gender');
const signup_password = document.querySelector('#signup_password');

const errorMessageDiv = document.getElementById('error-message');

document.addEventListener('DOMContentLoaded', () => {
    const jwtToken = localStorage.getItem('jwt_token');

    if (jwtToken) {
        // Redirect to the homepage if jwt_token is present
        window.location.href = 'home.html';
    }
});

login.addEventListener('click',()=>{
    signupform.style.display='none';
    loginform.style.display='block';
    errorMessageDiv.innerText = '';
});

singup.addEventListener('click',()=>{
    loginform.style.display='none';
    signupform.style.display='block';
    errorMessageDiv.innerText = '';
});

login_button = document.querySelector('#login_button');
signup_button = document.querySelector('#signup_button');

function validateLoginFields() {
    // Add validation logic for each field
    if (!isValidEmail(login_email.value)) {
        errorMessageDiv.innerText='Invalid email format.';
        return false;
    }

    // Add similar validation for other fields...

    return true;
}

function isValidEmail(email) {
    // Implement a basic email validation logic
    // You can use a more robust library or regex for email validation
    // This is just a simple example
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

login_button.addEventListener('click',(e)=>{
    e.preventDefault();
    errorMessageDiv.innerText="";
    if (!validateLoginFields()) {
        login_email.value="";
        login_password.value=""
        return;
    }
    var formData = new FormData();
    formData.append('email',login_email.value);
    formData.append('password',login_password.value);
    fetch('http://127.0.0.1:5000/login',{
        method:'POST',
        body:formData
    }).then((response)=>{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data=>{
        console.log(data);
        localStorage.setItem('jwt_token', data['jwt_token']);
        window.location.href = 'home.html';
    }).catch(error => {
        console.error('Error during login:', error);
        errorMessageDiv.innerText = 'Invalid credentials. Please try again.';
    });
});

function validateSignupFields() {
    // Add validation logic for each field
    if (!full_name.value) {
        errorMessageDiv.innerText='Full name is required.';
        return false;
    }

    if (!mobile_number.value) {
        errorMessageDiv.innerText='Invalid mobile number format.';
        return false;
    }

    if (!isValidEmail(signup_email.value)) {
        errorMessageDiv.innerText='Invalid email format.';
        return false;
    }

    if (!gender.value) {
        errorMessageDiv.innerText='Gender is required.';
        return false;
    }

    if (!signup_password.value || signup_password.value.length < 6) {
        errorMessageDiv.innerText='Password is required.';
        return false;
    }

    // Add more validation if needed...

    return true;
}

signup_button.addEventListener('click',(e)=>{
    e.preventDefault();
    errorMessageDiv.innerText="";
    if (!validateSignupFields()) {
        return;
    }
    var formData = new FormData();
    formData.append('full_name',full_name.value);
    formData.append('mobile_number',mobile_number.value);
    formData.append('email',signup_email.value);
    formData.append('gender',gender.value);
    formData.append('password',signup_password.value);
    console.log('Signup')
    async function signup(){
        const response = await fetch('http://127.0.0.1:5000/signup',{
            body:formData,
            method:'POST'
        });
        const data = await response.json();
        console.log("data.ok",data.ok);
        if (response.ok) {
            // Login successful, redirect or perform necessary actions
            localStorage.setItem('jwt_token',data['jwt_token'])
            window.location.href = 'home.html'
        } else {
            // Display error message to the user
            errorMessage.textContent = data.message;
        }
    }
    signup();
});
