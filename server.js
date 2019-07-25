const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Establish mongo connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/gravel";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here

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
  db.Driver.update()
  db.Driver.create(req.body)
    .then(function (dbDriver) {
      console.log(dbDriver)
    })
    .catch(function (err) {
      console.log("error: ", err);
    })
})

// Updating an existing trip (driver)
app.post("/rider/:id", function (req, res) {
  db.Driver.updateOne(
    { _id: req.params.id },

    // The field you want to update about
    {
      start_location: req.params.start_location,
      end_location: req.params.end_location
    }
  )
})

// Deleting an existing trip
app.delete("/rider/:id", function (req, res) {
  db.Driver.remove({ _id: req.params.id })
})


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
