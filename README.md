# Budget Tracker PWA

<br/>

## **Link** to GitHub repo: https://github.com/alinz07/Budget-Tracker-PWA

## **Link** to app deployed to Heroku: https://budget-tracker-mod19-tlinz.herokuapp.com/

<br/>

## **Table of Contents**

[Motivation and Code Overview](#motivation-and-code-overview) <br/>
[Technologies Used](#technologies-used)<br/>
[User Story](#user-story)<br/>
[Instruction to Run App](#instructions-to-run-app) <br/>
[Screenshot](#screenshot)<br/>
[Things I learned](#things-i-learned) <br/>
[What makes this project stand out?](#what-makes-this-project-stand-out) <br/>
[Credits](#credits)<br/>

<br/>

## **Motivation and Code Overview**

Update an existing budget tracker application to allow for offline access and functionality. The Budget Tracker PWA has a very simple data structure that modularizes the models from the html and css assets that are in the public folder, a folder for the Mongoose controlled api routes to update the db once the user has internet connectivity using IndexedDB and a server.js file at the root to run the application on the local server using the express package. To download and use the app, any user need only visit the deployed app on Heroku and download to their local machine.

<br/>

## **Technologies Used**

-   MongoDB
-   Mongoose
-   Node.js
-   Morgan
-   Lite-server
-   IndexedDB
-   Javascript
-   HTML
-   CSS

<br/>

## **User Story**

AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

GIVEN a budget tracker without an internet connection<br/>

-   WHEN the user inputs an expense or deposit<br/>
    THEN they will receive a notification that they have added an expense or deposit

-   WHEN the user reestablishes an internet connection<br/>
    THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated

<br/>

## **Instructions to Run App**

Clone Repository:

```
git clone https://github.com/alinz07/Budget-Tracker-PWA.git
```

Install Dependencies:

Ensure you have Node.js installed on your machine. Then, from the root directory:

```
npm i
```

Start Application on localhost:
From the root directory:

```
npm start
```

Navigate to http://localhost:3001/ to run application

<br/>

## **Screenshot of Web Application**

![gif-of-webapp](./public/img/mod-19.gif)

<br/>

## **Things I learned**

-   I spent a lot of time reading the module's indexedDb walkthrough to better understand the query language and how to simulate offline functionality in Chrome Dev Tools.
-   I also practiced patience with this app because I couldn't get the back end to work. It turns out I omitted the "I" in MONGODB_URI for the mongodb atlas key when connecting my data from heroku to atlas. A great lesson in going over every single step, chronologically, when setting up the remote server connection and reading heroku logs --tail.
-   I learned about chrome's ability to download PWAs and how to modify the downloaded app target to not use a chrome proxy, but rather chrome itself, so that the app looks like a standalone app and so I don't have to download a chrome_proxy app.

<br/>

## **What makes this project stand out?**

-   This app is very useful to end users because of it's offline functionality that leverages service workers for caching the static files, the browser's indexedDb api for transactions, and a remote server hosted on MongoDB Atlas.

<br/>

### **Credits**

The starter code for this application comes from the University of Wisconsin-Milwaukee Extended Campus
