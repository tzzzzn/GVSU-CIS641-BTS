profile = document.querySelector('#profile')
let create_task = document.querySelector('#create-button');
let overlay = document.querySelector('.overlay');
let add = document.querySelector('#add');
let cancel = document.querySelector('#cancel');
task_name=document.querySelector('#task_name');
task_description = document.querySelector('#task_description');
task_type = document.querySelector('#task_type');
start_date=document.querySelector('#start_date');
start_time=document.querySelector('#start_time');
focused=document.querySelector('#focused');
scheduled=document.querySelector('#scheduled');

document.addEventListener('DOMContentLoaded', ()=>{
    // jwt_token = localStorage.getItem('jwt_token')
    async function user()
    {
        let response = await fetch('http://127.0.0.1:5000/getuserdetails',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',  // Set the content type to JSON
                'Authorization':`Bearer ${localStorage.getItem('jwt_token')}`
            },
        });
        var data = await response.json();
        console.log(data);
        profile.innerText=data['full_name']
    }
    user();
});

create_task.addEventListener('click',()=>{
    overlay.style.display="flex";
});

add.addEventListener('click',()=>{
    const data1={
        'task_name':task_name.value,
        'task_description':task_description.value,
        'start_date':start_date.value,
        'start_time':start_time.value,
        'task_type':task_type.value
    }
    async function addTask(){
        var response = await fetch('http://127.0.0.1:5000/addTask',{
            body:JSON.stringify(data1),
            method:'POST',
            headers: {
                'Content-Type': 'application/json'  // Set the content type to JSON
            },
        });
        var data = await response.json();
        console.log(data);
    }
    console.log(data1);
    addTask();
});
task_type.addEventListener('change',()=>{
    if(task_type.value=='focused')
    {
        focused.style.display='block';
        scheduled.style.display='none';
    }
    else if(task_type.value=='scheduled')
    {
        focused.style.display='none';
        scheduled.style.display='block';
        scheduled.style.padding=0;
        scheduled.style.margin=0;
    }
    else
    {
        focused.style.display='none';
        scheduled.style.display='none';
    }
});
cancel.addEventListener('click',()=>{
    overlay.style.display="none";
    task_type.value='to_do';
    focused.style.display='none';
    scheduled.style.display='none';
});
