var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    lincense_number:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;