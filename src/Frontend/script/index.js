login=document.querySelector('.login');
signupform=document.querySelector('#signup');
singup=document.querySelector('.signup');
loginform=document.querySelector('#login');

login_email = document.querySelector('#login_email');
login_password = document.querySelector('#login_password');

full_name = document.querySelector('#full_name');
mobile_number = document.querySelector('#mobile_number');
signup_email = document.querySelector('#signup_email');
gender = document.querySelector('#gender');
signup_password = document.querySelector('#signup_password');

login.addEventListener('click',()=>{
    signupform.style.display='none';
    loginform.style.display='block';
});

singup.addEventListener('click',()=>{
    loginform.style.display='none';
    signupform.style.display='block';
});

login_button = document.querySelector('#login_button');
signup_button = document.querySelector('#signup_button');

login_button.addEventListener('click',(e)=>{
    e.preventDefault();
    var formData = new FormData();
    formData.append('email',login_email.value);
    formData.append('password',login_password.value);
    fetch('http://127.0.0.1:5000/login',{
        method:'POST',
        body:formData
    }).then((response)=>{
        console.log(response);
        return response.json();
    }).then(data=>{
        console.log(data);
        window.location.href = 'home.html'
    })
    // console.log(login_password.value);
});

signup_button.addEventListener('click',(e)=>{
    e.preventDefault();
    var formData = new FormData();
    formData.append('full_name',full_name.value);
    formData.append('mobile_number',mobile_number.value);
    formData.append('email',signup_email.value);
    formData.append('gender',gender.value);
    formData.append('password',signup_password.value);
    console.log('Signup')
    async function signup(){
        var response = await fetch('http://127.0.0.1:5000/signup',{
            body:formData,
            method:'POST'
        });
        var data = await response.json();
        console.log(data);
        window.location.href = 'home.html'
    }
    signup();
});