const mongoose = require("mongoose")

const User = mongoose.model("users", new mongoose.Schema({
    image:String,
    name:String,
    desc:String,
    price:Number
}))

module.exports = User