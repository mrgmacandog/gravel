import axios from "axios";

export default {
    // Routes for Driver page
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
    // Driver post a trip to riders database
    postRider: function () {
        return axios.post("/api/riders");
    },
    // Updating a trip posted by a driver in rider database
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
    // trip filter by start location
    getDriverStart: function (start_location) {
        return axios.get(`/api/drivers/${start_location}`)
    },
    // trip filter by start and end location
    getDriverStartEnd: function (start_location, end_location) {
        return axios.get(`/api/drivers/${start_location}/${end_location}`)
    },
    // adding a trip
    postDriver: function () {
        return axios.get("/api/drivers")
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
    }
};