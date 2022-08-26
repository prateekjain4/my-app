const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dataRouter = require("./routes/Blog");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/blogs')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// const router = require("./routes/router");

app.get("/", (req, res) => {
  res.send("Server is running");
});

// app.use("/", router);
app.use("/",dataRouter);

app.listen(5000, () => {
  console.log('server is running and listening to port 5000');
  
});
