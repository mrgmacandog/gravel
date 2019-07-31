const opencage = require("opencage-api-client");

module.exports = app => {
    // Route for retrieving geographic information for coordinates
    app.get("/api/get-city/:coords", function (req, res) {
        opencage
            .geocode({ q: req.params.coords })
            .then(data => res.json(data.results[0]))
            .catch(error => res.json("error", error.message));
    });
};