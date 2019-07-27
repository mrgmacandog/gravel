// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const db = require("./models");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dbConnection = require('./server/db') // loads our connection to the mongo database
const passport = require('./server/passport')
const axios = require('axios')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}

/* Express app ROUTING */
app.use('/auth', require('./server/auth'))

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// Establish mongo connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/gravel";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here

//TO DO make route which checks username in sign up with database
//Don't allow two user names to be created
// app.get('/auth/signup', function (req, res) {
//   db.User.findOne({ username: req.body.username })
//     .then(function (user) {
//       if(user) {
//         return }
//     })
//   })

// Get all the trip
app.get("/api/riders/", function (req, res) {
  // req.body.placeholder placeholder will be whatever id we called for text enter id
  db.Driver.find({})
    .then(function (dbDriver) {

      res.json(dbDriver);

    })
    .catch(function (err) {
      res.json(err);
    })
});

// Getting all the trip posted by rider, filter by start_location
app.get("/api/riders/:start_location", function (req, res) {
  // req.body.placeholder placeholder will be whatever id we called for text enter id
  db.Driver.find({ start_location: req.params.start_location })
    .then(function (dbDriver) {

      res.json(dbDriver);

    })
    .catch(function (err) {
      res.json(err);
    })
});

app.get("/api/riders/:start_location/:end_location", function (req, res) {
  db.Driver.find({ start_location: req.params.start_location, end_location: req.params.end_location })
    .then(function (dbDriver) {
      res.json(dbDriver);
    })
})

// Adding a trip(driver)
app.post("/api/riders", function (req, res) {
  console.log("req.body: ", req.body);
  //req.body should be the information Driver entered when posting
  db.Driver.create(req.body)
    .then(function (dbDriver) {
      console.log(dbDriver)
    })
    .catch(function (err) {
      console.log("error: ", err);
    })
})

app.post('/auth/signup', function(req,res) {
  console.log("posting signup");
  db.User.create(req.body)
  .then(function(user) {
    console.log("***SERVER.JS*****\n======USER NAME=======")
    console.log(user)
    res.send(user)
  })
  .catch(function(err) {
    console.log("error" + err)
  })
})

// Updating an existing trip (driver)
app.post("/api/riders/:_id", function (req, res) {
  db.Driver.updateOne(
    { _id: req.params._id },

    // The field you want to update about
    {
      start_location: req.body.start_location,
      end_location: req.body.end_location,
      leaving_date: req.body.leaving_date,
      cost: req.body.cost,
      seats_available: req.body.seats_available,
      smoking: req.body.smoking,
      luggage: req.body.luggage,
      comment: req.body.comment
    }
    .catch(function (err) {
      console.log("error: ", err);
    })
  )
  .then(function(dbDriver){
    res.json(dbDriver)
  })
})

// updating the rider into a trip
app.post("/api/riders/:id", function(req,res){

  let userID;
  db.User.find({loggedIn: true})
  .then(function(user){
    return userID = user._id
  })
  .catch(function (err) {
    console.log("error: ", err);
  });

  console.log("Current User: ", userID);

  db.Driver.updateOne(
    {_id: req.params._id},
    {
      // the id will need to be user id
      rider_id: userID
    }
  )
  .then(function(dbDriver){
    res.json(dbDriver)
  })
  .catch(function (err) {
    console.log("error: ", err);
  })
})

// Deleting an existing trip
app.delete("/api/riders/:id", function (req, res) {
  db.Driver.remove({ _id: req.params.id })
  .then(function(dbDriver){
    res.json(dbDriver)
  })
})


// Getting All signed up user information
app.get("/api/user", function(req,res){
  db.User.find({})
  .then(function(dbUser){
    res.json(dbUser)
  })
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
