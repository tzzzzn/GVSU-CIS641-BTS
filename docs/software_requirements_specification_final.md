## Overview
* This product helps users to plan their tasks and notifies them. Allows users to create varied type of tasks. Product has notification service which will notify users before their task starting time. Users can Add and Remove their tasks knowing that their data is secured. Users has the  ability to marks the tasks as completed once they are done.

# Software Requirements
* This Task Scheduler Software Requirements Specification (SRS) outlines the functional and non-functional requirements for the development of the Task Scheduler application. This document provides a comprehensive understanding of the features, constraints, and goals of the project.

## Functional Requirements
### Task Management
| ID | Requirement |
| :-------------: | :----------: |
| FR1 | Users can create new tasks with title, description, and due date. |
| FR2 | Users can create their preferred type of tasks. |
| FR3 | Users can mark a task as started, pending and completed. |
| FR4 | Users can delete their tasks, If they wish. |
| FR5 | The product displays all the tasks in sorted order. |

### Task Prioritization
| ID | Requirement |
| :-------------: | :----------: |
| FR6 | Users can set the priority of a task (High, Medium, Low). |
| FR7 | The system should automatically highlight or sort tasks based on priority. |
| FR8 | Users can quickly filter tasks by priority. |
| FR9 | The system should provide default priority levels with the option to add custom ones. |
| FR10 | Users receive notifications for high-priority tasks approaching the due date. |

### User Authentication
| ID | Requirement |
| :-------------: | :----------: |
| FR11 | Users must register with a valid email address and password. |
| FR12 | User Password should not be visible. |
| FR13 | Users can log in using their registered email and password. |
| FR14 | The system should securely store and manage user credentials. |
| FR15 | Allow users to change the email and passowrd. |

### Task Deadline Management
| ID | Requirement |
| :-------------: | :----------: |
| FR16 | Users receive reminders for upcoming task deadlines. |
| FR17 | The system should allow users to snooze or dismiss reminders. |
| FR18 | Users can customize the timing and frequency of task reminders. |
| FR19 | The system should automatically update task status based on the deadline. |
| FR20 | Users can view a calendar view of tasks with due dates. |

### User Interface and Experience
| ID | Requirement |
| :-------------: | :----------: |
| FR21 | The system should have a responsive and intuitive user interface. |
| FR22 | Users can quickly navigate between different sections (tasks, profile, settings). |
| FR23 | The system should provide clear and concise feedback on user actions. |
| FR24 | Users can personalize the appearance of the task dashboard. |
| FR25 | The system should provide tooltips and help sections for new users. |

## Non-Functional Requirements
### Performance
| ID | Requirement |
| :-------------: | :----------: |
| NFR1 | The system should load the task dashboard within 3 seconds of user login. |
| NFR2 | The database response time for task-related queries should be less than 500 milliseconds. |
| NFR3 | The system should handle concurrent user interactions without significant performance degradation. |
| NFR4 | The application should be optimized to minimize data transfer between the client and server. |
| NFR5 | The system should be scalable to accommodate an increasing number of users and tasks. |

### Reliability
| ID | Requirement |
| :-------------: | :----------: |
| NFR6 | The system should have a minimum uptime of 99.9%. |
| NFR7 | Data integrity should be maintained, and no data loss should occur during system failures. |
| NFR8 | The system should provide automated backups, and data recovery processes should be in place. |
| NFR9 | Users should experience minimal downtime during system updates or maintenance. |
| NFR10 | Error handling mechanisms should be in place to gracefully handle unexpected issues. |

### Security
| ID | Requirement |
| :-------------: | :----------: |
| NFR11 | User authentication and authorization should follow industry-standard security protocols. |
| NFR12 | User passwords should be stored securely using strong encryption techniques. |
| NFR13 | The system should implement HTTPS to ensure secure communication between the client and server. |
| NFR14 | Access to sensitive user data should be restricted based on user roles and permissions. |
| NFR15 | The application should undergo regular security audits and vulnerability assessments. |

### Usability
| ID | Requirement |
| :-------------: | :----------: |
| NFR16 | The user interface should be accessible and usable by individuals with disabilities. |
| NFR17 | The system should support multiple languages for a diverse user base. |
| NFR18 | Clear and comprehensive documentation should be available for users and administrators. |
| NFR19 | The system should provide in-app tutorials or guides for new users. |
| NFR20 | The application should be compatible with commonly used web browsers and devices. |

### Scalability and Compatibility
| ID | Requirement |
| :-------------: | :----------: |
| NFR21 | The system should be compatible with major operating systems (Windows, macOS, Linux). |
| NFR22 | The application should be responsive and functional on various screen sizes and resolutions. |
| NFR23 | The system should seamlessly integrate with popular third-party tools and services. |
| NFR24 | The architecture should support future enhancements and feature additions. |
| NFR25 | The application should gracefully handle an increasing number of simultaneous users. |

# Change Management Plan for Task Scheduler

**Introduction:**
Task Scheduler, an innovative task management application, requires a well-structured change management plan to ensure successful integration within the corporate environment.

## User Training:

1. **Online Training Modules:**
   - Develop interactive online modules covering Task Scheduler features.
   - Include video tutorials and interactive quizzes for engaging learning.

2. **User Workshops:**
   - Conduct live virtual workshops to provide hands-on training.
   - Allow users to ask questions and receive real-time assistance.

3. **User Manuals:**
   - Provide comprehensive user manuals with step-by-step instructions.
   - Manuals to be accessible online and downloadable for offline use.

4. **Help Desk Support:**
   - Establish a dedicated help desk for users to seek assistance.
   - Ensure prompt responses and issue resolution through the help desk.

## Integration within Ecosystem:

5. **API Integration:**
   - Develop robust APIs for seamless integration with existing corporate tools.
   - Ensure compatibility with common software used within the organization.

6. **Compatibility Testing:**
   - Conduct extensive compatibility tests with various platforms.
   - Regularly update compatibility information based on testing results.

7. **Customization Options:**
   - Allow users to customize Task Scheduler settings to match their workflow.
   - Provide flexibility to adapt to different team structures and preferences.

8. **Collaboration Features:**
   - Integrate Task Scheduler with popular collaboration tools (e.g., Slack, Microsoft Teams).
   - Enhance team communication and collaboration through integration.

## Issue Resolution Strategies:

9. **Dedicated Support Team:**
   - Form a dedicated support team to address user-reported issues.
   - Implement a ticketing system for efficient issue tracking.

10. **Bug Tracking System:**
    - Introduce a bug tracking system for systematic issue prioritization.
    - Regularly update users on the status of reported bugs.

11. **Regular Updates:**
    - Release regular updates to address bugs, introduce new features, and enhance performance.
    - Encourage users to update their Task Scheduler versions regularly.

12. **User Feedback Mechanism:**
    - Establish a user feedback mechanism for reporting issues and suggesting improvements.
    - Use feedback to continuously improve Task Scheduler.

## Change Communication:

13. **Clear Communication Channels:**
    - Utilize multiple communication channels (email, newsletters, intranet) to announce changes.
    - Communicate upcoming updates, training schedules, and system improvements.

14. **Training Announcements:**
    - Clearly communicate training schedules, available resources, and expectations.
    - Send reminders and follow-ups to ensure maximum participation.

15. **Feedback Sessions:**
    - Conduct periodic feedback sessions to gather insights from users.
    - Address concerns and suggestions raised during feedback sessions.

## Pilot Implementation:

16. **Select Pilot Groups:**
    - Identify pilot groups from different departments for initial implementation.
    - Gather feedback and insights from pilot users before full-scale deployment.

17. **Feedback Collection:**
    - Collect feedback from pilot groups to identify potential challenges and areas for improvement.
    - Make necessary adjustments based on pilot user experiences.

18. **Iterative Improvements:**
    - Implement iterative improvements based on feedback and lessons learned.
    - Ensure that Task Scheduler aligns effectively with user needs.

## User Advocacy Program:

19. **Champion Users:**
    - Identify and empower user advocates within each department.
    - Recognize and appreciate advocates for their contribution to Task Scheduler's successful adoption.

20. **Recognition Programs:**
    - Implement recognition programs to highlight active and proficient Task Scheduler users.
    - Encourage a positive user community through recognition.

21. **Knowledge Sharing Sessions:**
    - Organize knowledge-sharing sessions where experienced users share best practices.
    - Facilitate the exchange of insights and tips among Task Scheduler users.

By implementing this comprehensive change management plan, Task Scheduler aims to ensure a seamless integration process, enhance user adoption, and address any challenges that may arise during the deployment within the corporate environment.


## Traceability Between Requirements and Artifacts

**Overview:**
To ensure transparency and alignment between software requirements and artifacts, Task Scheduler establishes traceability mechanisms. This section outlines the traceability links for use case diagrams, class diagrams, and activity diagrams.

## Use Case Diagram Traceability

| Artifact ID | Artifact Name                | Requirement ID |
| :----------: | :--------------------------: | :------------: |
| UC1          | Task Creation               | FR12, NFR5     |
| UC2          | Notification Preferences   | FR18, NFR10    |
| UC3          | User Authentication         | FR5, NFR3      |


## Class Diagram Traceability

| Artifact Name    | Requirement ID  |
| :---------------: | :--------------: |
| classTask         | FR12, NFR8       |
| classUser         | FR5, NFR3        |
| classNotification | FR18, NFR10      |

## Activity Diagram Traceability

| Artifact ID | Artifact Name                | Requirement ID     |
| :----------: | :--------------------------: | :-----------------: |
| AD1          | Task Processing             | FR12-15, NFR8      |
| AD2          | User Login                   | FR5, NFR3          |
| AD3          | Notification Workflow       | FR18-20, NFR10     |

# Link to Previously Developed Artifacts

* [Database Design](https://github.com/tzzzzn/GVSU-CIS641-BTS/blob/main/docs/Database_Design.png)
* [Use Case Diagram](https://github.com/tzzzzn/GVSU-CIS641-BTS/blob/main/docs/Use-case%20Diagram.pdf)
* [Activity Diagram](https://github.com/tzzzzn/GVSU-CIS641-BTS/blob/main/docs/Activity%20Diagram.pdf)
* [Object Diagram](https://github.com/tzzzzn/GVSU-CIS641-BTS/blob/main/docs/object%20diagrams.pdf)
* [Navigation Diagram](https://github.com/tzzzzn/GVSU-CIS641-BTS/blob/main/docs/Navigation%2Bdiagram.pdf)

