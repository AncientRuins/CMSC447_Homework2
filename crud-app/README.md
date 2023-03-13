# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The tutorial at [Geeks-for-Geeks](https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/) was very helpful in initially creating this website. Using this resource, I created the create-user and user-list pages. Everything else was created by me based on this code to achieve the functionality required by this project.

# Running the Website
1. Clone the project to a convienient location and then cd to the directory in a terminal. You will need at least 2 channels open in the terminal.
2. Before beginning, the following tools are required: Node Package Manager (npm) and MongoDB (Need to install the database software on the computer).
3. In the first channel, cd to /crud-app/backend and in the second channel, cd to /crud-app .
4. Then, run the following command in both channels
### `npm start`
5. Running this in the backend folder boots up the server and the database for use. Running it in the crud-app folder sets up the website in development mode. After a few seconds, it should open up your browser to the website. If it does not, open [http://localhost:3000](http://localhost:3000) to view it in your browser.
6. If this does not work for whatever reason, you can contact me at my school email (fw88455@umbc.edu), and I can do a demo of the website for grading.

# Using the Website
The default page for the website is the user list, where all the users in the database can be seen. In this table, the name, id, and points of the user are visible. Also here is the option to delete a user. When that button is selected, an alert will pop up indicating the success (or failure) of the delete operation. Afterwards, the page should refresh to reflect the changes.

The next page of interest is the create user page. Here, the user's information can be entered and, once the button is pressed, the user will be created if it is valid. There is input validation for these fields. Specifically, the name field accepts only strings and id and points accept only positive integers. All the code assumes that the name is entered in the format "First Name Last Name" . For id in particular, the backend checks to make sure that the id is unique. If all the criteria is met, then the user is created and a popup alert stating this is sent. If some of the criteria is not met, then a popup alert appears stating that something went wrong (probably a non-unique id).

On the search user page, a user can be searched for using their id. If there is a person with that id, their information is displayed in the table. If there is no one with that id, then a popup alert shows up stating that there is no one with that id.

On the retrieve user points page, a user's points can be retrieved via their name. This assumes the inputted name is in the same format as the name stored in the database. To ensure the name is correctly entered, refer to the user list. When the button is pressed, the points for all users with that specific name will show up in that table alongside their name. If nobody has that name, then a popup appears stating that there is no one in the database with that name.

# Issues
1. There is an issue where the popups appear twice in a row. I have yet to find a fix for them, so they still appear.

# Closing the Website
To close the website, head back to the terminals you used to start the website. Here, you can hit Ctrl + C in both terminal channels, and it should terminate the process. If you attempt to refresh the website, it should indicate that there is no longer a website with that address.

Note that the code and other files in this project directory take up several MBs of storage. Thus, if disk space is of importance, the directory should be deleted from your personal files after testing.
