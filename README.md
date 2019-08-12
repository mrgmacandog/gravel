# Create React Express App - GRAVEL

##  This app connects riders and drivers looking to carpool.

The Gravel application allows the user to do:

1. Sign up for the app. 

2. Make a post requesting or offering. 

3. See the flexibility of the date, cost, number of seats, whether or not smoking is allowed, and whether or not there is luggage space/necessity a ride.

4. See a map of the intended start and end location will be displayed and they can then connect with the author and inquire about the ride offered or requested.

5. View existing posts in a dashboard page and also the drivers or riders with whom they are connected.


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
