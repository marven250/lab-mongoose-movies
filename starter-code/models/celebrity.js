//import { Schema, Mongoose } from "mongoose";
const mongoose = require("mongoose")
const Schema = mongoose.Schema


const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const celebrity = mongoose.model("celebrity", celebritySchema)

module.exports = celebrity
