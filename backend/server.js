const express = require("express");
const cors = require ("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//app config
const app = express();
const port = process.env.PORT || 8000;

//middlware
app.use(cors());
app.use(express.json());

// Configure Mongo
const db = "mongodb://localhost/team100-projects";

// Connect to Mongo with Mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

const projectsRouter =require("./routes/projects");

app.use("/projects", projectsRouter);

app.listen(port, ()=>{
    console.log("Server is running on port:"+port);
});