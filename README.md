#Gravel

Gravel is a car-pooling app which connects drivers and passengers. Using Gravel, users are able to make posts requesting or offering rides and see posts from other users.

The user begins with signing up using a unique username and password with the node package module Passport using local strategy. If the username is in use, they are prompted to select a new one. After succesfully signing up, the user's data is saved to the collection in MongoDB for future use.

Once logged in, the user may now search for rides offered or requested. After entering in a departure city, the user selects if they are looking for a ride or looking to offer a ride and the resulting data is displayed. For example, if the user is trying to find a ride from Seattle, all ofered trips starting in Seattle will be displayed showing the destination city, departure date, money requested and seats available. 

When the user sees a ride or passenger they are interested in, they may click on the posting which presents the user with the ability to contact the post's author and communicate further about the ride share. 

# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.


