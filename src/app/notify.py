import smtplib
from email.message import EmailMessage
from app.Config import config
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime,timedelta
from .database import get_task,get_user_details


def sendemail(task):
    msg = EmailMessage()
    body = "Description : "+ task['task_description'] + '''
'''+ "This is of " + task['task_type'] + '''
You can change the status once after you started it. Currently it is ''' + task['task_status']
    msg.set_content(body)
    msg['subject'] = task['task_name']
    msg['to']=task['user_mail']
    user = 'tkrv143@gmail.com'
    msg['from'] = 'tkrv143@gmail.com'
    password = config.APP['mail_password']
    server=smtplib.SMTP("smtp.gmail.com",587)
    server.starttls()
    server.login(user, password)
    server.send_message(msg)
    server.quit()
# sendemail({'task_description':"testing",'task_type':"to_do",'task_status':"new",'task_name':"test",
#            'user_mail':"kumartharun085@gmail.com"})

def identify_tasks():
    #Fetch all the tasks whose start
    date_param = str(datetime.now().strftime('%Y:%m:%d')).replace(':','-')
    print(date_param)
    search_params = {'start_date':date_param}
    all_tasks = []
    to_do_tasks = get_task("to_do",search_params)
    all_tasks += list(to_do_tasks)
    focused_tasks = get_task("focused",search_params)
    all_tasks+=list(focused_tasks)
    search_params['start_date'] = {'$lte': date_param}
    search_params['end_date'] = {'$gte': date_param}
    recurring_tasks = get_task("recurring",search_params)
    all_tasks+=list(recurring_tasks)
    now = datetime.now()
    for task in all_tasks:
        task_start_time = datetime.strptime(task['start_time'], '%H:%M').time()
        print(task_start_time)
        now_datetime = datetime.combine(datetime.today(), now.time())
        print(now_datetime)
        task_start_datetime = datetime.combine(datetime.today(), task_start_time)
        time_diff = task_start_datetime - now_datetime
        print(time_diff)
        if time_diff <= timedelta(minutes=1) and time_diff>timedelta(minutes=0):
            print('sending email')
            k = get_user_details({'_id':task['userId']},{'email':1})
            print(k)
            task['user_mail'] = k['email']
            sendemail(task)
    
scheduler = BackgroundScheduler()
scheduler.add_job(identify_tasks, 'interval', minutes=1)
scheduler.start()
