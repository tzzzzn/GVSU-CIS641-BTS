## Overview
* The documents specifies detailed description of the requirements for "Task Scheduler Website". Task Scheduler is
task scheduling website, which helps users to organize their tasks. Users have the option to get notification
prior to the task.

## Functional Requirements
# 1. Signup/Login
    - User shall select signup option, if not registered.
    - User shall select Login option, if already registered.
# 2. Create Task
    - User shall create new tasks.
# 3. Update Task
    - User shall update/delete the existing task.
# 4. Task Category
    - User shall select his desired category.
# 5. Notification
    - User shall opt for emails/Messages.
# 6. Calender
    - User shall see the tasks in the selected calendar format.

## Non-Functional Requirements
# 1.Security
    - User data shall be protected.
# 2.Authentication
    - Only Registered users shall access the website.
# 3.Usability
    - The application shall have a good user interface.
# 4.Processing Time
    - Processing time shall not take more time.
# 5.Scalability
    - The website shall handle mutiple user requests and no downtime.
# 6.Logs
    - Website shall have logs for backtracking if issues occur.


// Task Scheduler
// Login/signup
//
User
-userId:MongoID
-Name 
-Email
-Password -> we have to store the password by changing it using some hash function.
-Tasks -> task ID's we will have task table

Tasks
-TaskID:MongoID
-UserID:MongoID
-Name
-Description
-Currentdate
-Completed:True/False
-


Tasks:
1. Display all the tasks that user have O(N) 1 user might contain M tasks. Here n refers total tasks by all Users.
2. Update specific task. O(1)
3. Add new task. O(1)
4. Delete a task. O(N).
