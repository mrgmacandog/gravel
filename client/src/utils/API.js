import axios from "axios";

export default {
    // Routes for Driver page
    // Getting the list of rider requested trip
    getRider: function () {
        return axios.get("/api/riders");
    },
    // Getting the trip filter by start location
    getRiderStart: function () {
        return axios.get("/api/riders/:start_location")
    },
    //Getting the trip filter by start and end location
    getRiderStartEnd: function (){
        return axios.get("/api/riders/:start_location/:end_location")
    },
    // Driver post a trip to riders database
    postRider: function () {
        return axios.post("/api/riders");
    },
    // Updating a trip posted by a driver in rider database
    updateRider: function () {
        return axios.post("/api/riders/:_id");
    },
    // Deleting a trip posted by a driver in rider database
    deleteRider: function () {
        return axios.delete("/api/riders/:_id");
    },

    // Routes for Rider pages
    // Getting all trips
    getDriver: function(){
        return axios.get("/api/drivers/");
    },
    // trip filter by start location
    getDriverStart: function(){
        return axios.get("/api/drivers/:start_location")
    },
    // trip filter by start and end location
    getDriverStartEnd: function(){
        return axios.get("/api/drivers/:start_location/:end_location")
    },
    // adding a trip
    postDriver: function(){
        return axios.get("/api/drivers")
    },
    // updating a trip
    updateDriver: function(){
        return axios.get("/api/drivers/:_id")
    },
    // deleting an existing trip
    deleteDriver: function(){
        return axios.delete("/api/drivers/:_id")
    }

};