const express = require('express')
const config = require("./config")
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const app = express()

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
}).then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err))
// app.use("/", (req, res) => {
//     res.end()
// })

app.listen("5000", () => {
    console.log("running on Port: 5000")
})