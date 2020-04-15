# fridge-tracker
## CS3200 Final Project by Stanley Liu and Miles Barker

# Installation Instructions

## Software Used
- React.js
- Python
- MySQLWorkbench

## Libraries Used
- bootstrap
- react-router-dom
- flask
- flask-cors
- flask-json
- flask-mysqldb

# Mac Instructions
1. Install Python 3 (https://www.python.org/downloads/) if not already installed (must be added to PATH)
2. Install packages by running the following commands from /fridge-tracker/backend:
    * pip install flask
    * pip install flask-cors
    * pip install flask-json
    * pip install flask-mysqldb
3. Add user to MySQLWorkbench with all privileges/permissions
    * Username: root
    * Password: root
4. Add the following lines to your bash profile file
    * export PATH=$PATH:/usr/local/mysql/bin
    * export DYLD_LIBRARY_PATH=$DYLD_LIBRARY_PATH:/usr/local/mysql/lib
    * Save and close the file, then run "source ~/.bash_profile" in the terminal
5. Execute provided /fridge-tracker/backend/fridge-tracker.sql dump file in localhost (my MySQLWorkbench port is 3306 but the port shouldn't matter)
6. Install latest recommended version of node.js (https://nodejs.org/en/)
7. In /fridge-tracker/backend, run "python fridge-tracker.py" from the command line to start the backend server on port 5000
8. In /fridge-tracker/frontend, run "npm start" from the command line to start the frontend on port 3000
9. Navigate to "localhost:3000/[page-name] to access the following pages:
    * "localhost:3000/login" - The Log In page for fridge-tracker, you can log in using any valid User in the database.
    * "localhost:3000/signup" - The Sign Up page for fridge-tracker, you can register a new User to the database using this page.
    * "localhost:3000/home/[username]" - The main application page for any valid fridge-tracker User.

# Windows Instructions
1. Install Python 3 (https://www.python.org/downloads/) if not already installed (must be added to PATH)
2. Install packages by running the following commands from /fridge-tracker/backend:
    * pip install flask
    * pip install flask-cors
    * pip install flask-json
    * pip install flask-mysqldb
3. Add user to MySQLWorkbench with all privileges/permissions
    * Username: root
    * Password: root
4. Execute provided /fridge-tracker/backend/fridge-tracker.sql dump file in localhost (my MySQLWorkbench port is 3306 but the port shouldn't matter)
5. Install latest recommended version of node.js (https://nodejs.org/en/)
6. In /fridge-tracker/backend, run "python fridge-tracker.py" from the command line to start the backend server on port 5000
7. In /fridge-tracker/frontend, run "npm start" from the command line to start the frontend on port 3000
8. Navigate to "localhost:3000/[page-name] to access the following pages:
    * "localhost:3000/login" - The Log In page for fridge-tracker, you can log in using any valid User in the database.
    * "localhost:3000/signup" - The Sign Up page for fridge-tracker, you can register a new User to the database using this page.
    * "localhost:3000/home/[username]" - The main application page for any valid fridge-tracker User.
