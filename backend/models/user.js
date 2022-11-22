const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let userSchema = new Schema(
    {   
        f_name: {
            type: String,
        },
        s_name: {
            type: String,
        },
        f_lastname: {
            type: String,
        },
        s_lastname: {
            type: String,
        },
        email : {
            type: String,
        },
        user : {
            type: String,
        },
        password: {
            type: String,
        },
        
    },
    {
        collection: "users",
    }
);

module.exports = mongoose.model("users",userSchema);