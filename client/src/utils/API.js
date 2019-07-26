import axios from "axios";

export default {
    // Getting the list of rider requested trip
    getRider: function () {
        return axios.get("/api/riders");
    },
    // Driver post a trip to riders database
    postRider: function () {
        return axios.post("/api/riders");
    },
    // Updating a trip posted by a driver in rider database
    updateRider: function () {
        return axios.post("/rider/:id");
    },
    // Deleting a trip posted by a driver in rider database
    deleteRider: function () {
        return axios.delete("/rider/:id");
    }

};