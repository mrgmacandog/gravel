const db = require("../models");

module.exports = app => {
    // If you are a driver
    // Get all the trip
app.get("/api/riders/", function (req, res) {
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
  });
  
  // Adding a trip
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
  });

  // Updating an existing trip
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
  app.post("/api/riders/:_id", function(req,res){
  
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
  app.delete("/api/riders/:_id", function (req, res) {
    db.Driver.remove({ _id: req.params.id })
    .then(function(dbDriver){
      res.json(dbDriver)
    })
  })
}
