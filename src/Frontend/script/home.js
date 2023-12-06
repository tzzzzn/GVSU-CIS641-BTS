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
focused_end_time = document.querySelector('#focused_end_time');
recurring_end_time = document.querySelector('#recurring_end_time');
recurring_end_date = document.querySelector('#end_date');
focused=document.querySelector('#focused');
recurring=document.querySelector('#recurring');
prevday = document.querySelector('#prev-day');
nextday = document.querySelector('#next-day');
let currentDate= new Date();

function display_tasks(){
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    async function get_tasksk(){
        var response = await fetch(`http://127.0.0.1:5000/get_tasks?date=${formattedDate}`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',  // Set the content type to JSON
                'Authorization':`Bearer ${localStorage.getItem('jwt_token')}`
            },
        });
        var data = await response.json();
        console.log("data",data);
        console.log('tasks printing');
        console.log(data['tasks']);
        const tasks=data['tasks']
        const tasksListDiv = document.getElementById('tasks_list');
        const k = document.createElement('div');
        tasksListDiv.children[0].remove();
        tasksListDiv.append(k);
        tasks.forEach(task => {
            const taskBoxDiv = document.createElement('div');
            taskBoxDiv.id = 'task_box';
            taskBoxDiv.classList=task._id;
            const time = document.createElement('div');
            time.id = 'time';
            const taskTimeDiv = document.createElement('div');
            taskTimeDiv.id = 'task_time';
            taskTimeDiv.textContent = task.start_time;
            time.appendChild(taskTimeDiv);
            const taskEndTimeDiv = document.createElement('div');
            taskEndTimeDiv.id = 'task_end_time';
            taskEndTimeDiv.textContent = `-  ${task.end_time}`;
            time.appendChild(taskEndTimeDiv);
            if(task.task_type!='to_do')
                taskEndTimeDiv.style.display="inline";
            taskBoxDiv.appendChild(time);
            const taskTypeDiv = document.createElement('div');
            taskTypeDiv.id = 'task_task_type';
            taskTypeDiv.textContent = task.task_type;
            taskBoxDiv.appendChild(taskTypeDiv);
        
            const taskTitleDiv = document.createElement('div');
            taskTitleDiv.id = 'task_title';
            taskTitleDiv.textContent = task.task_name;
            taskBoxDiv.appendChild(taskTitleDiv);
        
            const taskDescriptionDiv = document.createElement('div');
            taskDescriptionDiv.id = 'task_task_description';
            taskDescriptionDiv.textContent = task.task_description;
            taskBoxDiv.appendChild(taskDescriptionDiv);
        
            const taskOperationsDiv = document.createElement('div');
            taskOperationsDiv.id = 'task_operations';
        
            const taskDeleteDiv = document.createElement('div');
            taskDeleteDiv.id = 'task_delete';
            taskDeleteDiv.textContent = 'Delete';
            taskOperationsDiv.appendChild(taskDeleteDiv);
        
            const taskUpdateStatusDiv = document.createElement('div');
            taskUpdateStatusDiv.id = 'task_update_status';
            const selectElement = document.createElement('select');
            selectElement.id = 'task_update_type'
            const options = [
                { value: 'new', text: 'New' },
                { value: 'started', text: 'Started' },
                { value: 'pending', text: 'Pending' },
                { value: 'completed', text: 'Completed' },
            ];
            console.log('task_status',task['task_status'])
            if(task.task_status===undefined)
                task.task_status='new';
            options.forEach((option) => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.text = option.text;
                if(task.task_status===option.value)
                    optionElement.selected = true;
                selectElement.appendChild(optionElement);
            });
            taskUpdateStatusDiv.append(selectElement);
            taskOperationsDiv.appendChild(taskUpdateStatusDiv);
        
            taskBoxDiv.appendChild(taskOperationsDiv);
        
            // Append the task box to the tasks list
            k.appendChild(taskBoxDiv);
        });
    }
    get_tasksk();
}
function displayCurrentDate() {
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    document.querySelector('#month-day').innerText = formattedDate;
    display_tasks();
}

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
    displayCurrentDate();
});

create_task.addEventListener('click',()=>{
    overlay.style.display="flex";
});

function prevDay() {
    currentDate.setDate(currentDate.getDate() - 1);
    displayCurrentDate();
}

prevday.addEventListener('click',()=>{
    prevDay();
});

function nextDay() {
    currentDate.setDate(currentDate.getDate() + 1);
    displayCurrentDate();
}

nextday.addEventListener('click',()=>{
    nextDay();
});

add.addEventListener('click',()=>{
    const data1={
        'task_name':task_name.value,
        'task_description':task_description.value,
        'start_date':start_date.value,
        'start_time':start_time.value,
        'task_type':task_type.value
    }
    if(task_type.value=="focused")
        data1['end_time'] = focused_end_time.value;
    else if(task_type.value=='recurring')
    {
        data1['end_time'] = recurring_end_time.value;
        data1['end_date'] = recurring_end_date.value;
    }
    async function addTask(){
        var response = await fetch('http://127.0.0.1:5000/addTask',{
            body:JSON.stringify(data1),
            method:'POST',
            headers: {
                'Content-Type': 'application/json',  // Set the content type to JSON
                'Authorization':`Bearer ${localStorage.getItem('jwt_token')}`
            },
        });
        var data = await response.json();
        cancel_popup();
        display_tasks();
    }
    console.log(data1);
    addTask();
});
task_type.addEventListener('change',()=>{
    if(task_type.value=='focused')
    {
        focused.style.display='block';
        recurring.style.display='none';
    }
    else if(task_type.value=='recurring')
    {
        focused.style.display='none';
        recurring.style.display='block';
        recurring.style.padding=0;
        recurring.style.margin=0;
    }
    else
    {
        focused.style.display='none';
        recurring.style.display='none';
    }
});
function cancel_popup(){
        overlay.style.display="none";
        task_type.value='to_do';
        focused.style.display='none';
        recurring.style.display='none';
}
cancel.addEventListener('click',cancel_popup);

const tasks_list = document.querySelector('#tasks_list')
tasks_list.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.id=='task_update_type')
    {
        console.log('task_update_type');
        console.log(e.target.parentNode.parentNode.parentNode.className);
        const parent = e.target.parentNode.parentNode.parentNode;
        const task_type = parent.querySelector('#task_task_type').innerText;
        console.log(task_type);
        async function updateStatus(){
            var response = await fetch('http://127.0.0.1:5000/updateTask',{
                body:JSON.stringify({'_id':parent.className,'task_type':task_type,'update':{'task_status': e.target.value}}),
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',  // Set the content type to JSON
                    'Authorization':`Bearer ${localStorage.getItem('jwt_token')}`
                },
            });
            var data = await response.json();
        }
        updateStatus();
    }
    else if(e.target.id=='task_delete')
    {
        console.log('task_delete');
        console.log(e.target.parentNode.parentNode.className);
        const parent = e.target.parentNode.parentNode;
        const task_type = parent.querySelector('#task_task_type').innerText;
        console.log(task_type);
        async function deletetask(){
            var response = await fetch('http://127.0.0.1:5000/deleteTask',{
                body:JSON.stringify({'_id':parent.className,'task_type':task_type}),
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',  // Set the content type to JSON
                    'Authorization':`Bearer ${localStorage.getItem('jwt_token')}`
                },
            });
            var data = await response.json();
            display_tasks();
        }
        deletetask();
    }
});
const logout = document.querySelector('#logout');
logout.addEventListener('click',()=>{
    localStorage.clear();
    window.location.href = 'index.html'
});
