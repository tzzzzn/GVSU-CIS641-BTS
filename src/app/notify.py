import smtplib
from email.message import EmailMessage
from app.Config import config

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
