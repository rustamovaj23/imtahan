const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const userRouter = require("./Router/User.Routes")

app.use(express.json())
app.use(cors())
app.use("/users", userRouter)
mongoose.connect("mongodb+srv://tu7qc8kga:salam1234567@edu.uzshu88.mongodb.net/").then(res=>{
    console.log("connected mongodb!")
})
app.listen(8080, ()=>{
    console.log("app runnign on 8080")
})