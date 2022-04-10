# Budget Tracker Mod19

<br/>

## **Link** to GitHub repo: https://github.com/alinz07/budget-tracker-mod19

## **Link** to app deployed to Heroku: https://budget-tracker-mod19-tlinz.herokuapp.com/

<br/>

## **Motivation**

Update an existing budget tracker application to allow for offline access and functionality.

<br/>

## **Table of Contents**

[How and Why?](#what-problem-does-this-solve-and-how-was-a-solution-accomplished) <br/>
[Things I learned](#things-i-learned) <br/>
[What makes this project stand out?](#what-makes-this-project-stand-out) <br/>
[Challenge Criteria](#challenge-criteria)<br/>
[Screenshot of Web Application](#screenshot-of-web-application)<br/>
[Credits](#credits)<br/>

<br/>

## **What Problem does this solve and how was a solution accomplished?**

Having offline functionality is paramount to the success of an application that handles users’ financial information. The app will use mongoose and indexedDB from the previous module because to be a successful developer, you must be able to formulate a solution by synthesizing knowledge that you’ve picked up from previous experience.

<br/>

## **Things I learned**

-   I spent a lot of time reading the module's indexedDb walkthrough and better understand the query language and network manipulation in Dev Tools.
-   I also practiced patience with this app because I couldn't get the back end to work. It turns out I omitted the "I" in MONGODB_URI for the mongodb atlas key when connecting my data from heroku to atlas. A great lesson in going over every single step, chronologically, when setting up the remote server connection and reading heroku logs --tail.

<br/>

## **What makes this project stand out?**

-   This app is very useful to end users because of it's offline functionality that leverages the browser's indexedDb api and a remote server hosted on MongoDB Atlas

<br/>

## **Challenge Criteria**

AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

GIVEN a budget tracker without an internet connection<br/>

-   WHEN the user inputs an expense or deposit<br/>
    THEN they will receive a notification that they have added an expense or deposit

-   WHEN the user reestablishes an internet connection<br/>
    THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated

    <br/>

## **Screenshot of Web Application**

![gif-of-webapp](./public/img/mod-19.gif)

<br/>

### **Credits**

The starter code for this application comes from the University of Wisconsin-Milwaukee Extended Campus
