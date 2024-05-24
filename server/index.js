const express = require('express')
const config = require("./config")
const cors = require('cors')
const dotenv = require('dotenv')
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const mongoose = require('mongoose');
const app = express()

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use("/api/auth", authRoute);

app.listen("5000", () => {
    console.log("running on Port: 5000")
})