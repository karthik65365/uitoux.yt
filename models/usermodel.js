const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    power_type: {
        type: String,
        require: true
    },
})

const User = new mongoose.model("user", userSchema)
module.exports = User