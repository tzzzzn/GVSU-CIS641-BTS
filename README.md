# Team BTS Task Scheduler

Task Scheduler is a project developed by Team BTS. This product help users to organize their day-to-day tasks efficiently and notifies them. Which gradually improves their productivity.

## Team Members and Roles

* [Tharun (Backend)](https://github.com/tzzzzn/CIS641-HW2-Vangala)
* [Brahmaiah Boyalla (Front End)](https://github.com/Brahmiboyalla/CIS641-HW2-BOYALLA) 

## Prerequisites

Ensure that you have Python and pip installed on your machine.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/tzzzzn/GVSU-CIS641-BTS.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd src
    ```

3. **Set Up a Virtual Environment:**

    ```bash
    python -m venv env
    ```

4. **Activate the Virtual Environment:**

    - On Windows:

        ```bash
        .\env\Scripts\activate
        ```

    - On macOS/Linux:

        ```bash
        source env/bin/activate
        ```

5. **Install Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

## Run Instructions

1. **Set the envirnoment variable** 
    - On Windows:

        ```bash
        set FLASK_APP=taskscheduler.py
        ```

    - On macOS/Linux:

        ```bash
        export FLASK_APP=taskscheduler.py
        ```

2. **Run the Flask Application:**

    ```bash
    flask run
    ```

3. **Open Your Web Browser and Go to [http://localhost:5000](http://localhost:5000).**
