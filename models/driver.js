const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    driver_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    start_location: {
        type: String,
        lowercase: true,
        required: true
    },
    end_location: {
        type: String,
        lowercase: true,
        required: false
    },
    leaving_date:{
        type: Date,
        required: true
    },
    flexible_date:{
        type: Boolean,
        default: false,
        required: false
    },
    cost:{
        type: Number,
        required: false
    },
    seats_available:{
        type: Number,
        required: true
    },
    smoking:{
        type: Boolean,
        required: true
    },
    luggage: {
        type: Boolean,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
    // rider_id: [{
    //     type: Schema.type.ObjectId,
    //     ref: "user"
    // }]
});

const Driver = mongoose.model("Driver", DriverSchema);

module.exports = Driver;