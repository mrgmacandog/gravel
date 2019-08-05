import axios from "axios";

export default {
    // Getting the list of rider requested trip
    getRider: function () {
        return axios.get("/api/riders");
    },
    // Getting the trip filter by start location
    getRiderStart: function (start_location) {
        return axios.get(`/api/riders/${start_location}`)
    },
    //Getting the trip filter by start and end location
    getRiderStartEnd: function (start_location, end_location) {
        return axios.get(`/api/riders/${start_location}/${end_location}`)
    },
    // Driver post a trip to driver database
    postRider: function (newRider) {
        return axios.post("/api/riders", newRider);
    },
    // Updating a trip posted by a driver in driver database
    updateRider: function (_id) {
        return axios.post(`/api/riders/${_id}`);
    },
    // Deleting a trip posted by a driver in rider database
    deleteRider: function (_id) {
        return axios.delete(`/api/riders${_id}`);
    },

    // Routes for Rider pages
    // Getting all trips
    getDriver: function () {
        return axios.get("/api/drivers/");
    },
    getDriverPost: function(driver_id){
        return axios.get(`/api/drivers/${driver_id}`)
    },
    // trip filter by start location
    getDriverStart: function (start_location) {
        return axios.get(`/api/drivers/${start_location}`)
    },
    // trip filter by start and end location
    getDriverStartEnd: function (start_location, end_location) {
        return axios.get(`/api/drivers/${start_location}/${end_location}`)
    },
    // adding a trip
<<<<<<< HEAD
    postDriver: function () {
        return axios.get("/api/drivers")
=======
    postDriver: function(newDriver){
        return axios.post("/api/drivers", newDriver)
>>>>>>> 14404a46ed46fcb01823e23e8c469f7687016fc8
    },
    // updating a trip
    updateDriver: function (_id) {
        return axios.get(`/api/drivers/${_id}`)
    },
    // deleting an existing trip
    deleteDriver: function (_id) {
        return axios.delete(`/api/drivers/${_id}`)
    },

    // OpenCage API
    // Get current city from current coordinates
    getCurrentCity: function (coords) {
        return axios.get(`/api/get-city/${coords}`);
    },
<<<<<<< HEAD

    //Login for after signup
    login: function (username, password, cb) {
        return axios.post('/auth/login', {
            username: username,
            password: password
        })
        .then(response => {
            console.log('RESPONSE FROM API')
            console.log(response.data)
            if (response.status === 200) {
                cb(response.data.user.local.username, response.data.user._id);
            }
        }).catch(err => {
            if (err) {
                console.log(err)
                alert("Please enter a valid username and password");
            }
        });
=======
    
    getCityCoords: function(city) {
        return axios.get(`/api/get-coords/${city}`);
>>>>>>> 14404a46ed46fcb01823e23e8c469f7687016fc8
    }
};