require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);
require('./config/cors.config')(app)


const index = require("./routes/index");
app.use("/sv", index);

const authRoutes = require("./routes/auth");
app.use("/sv/auth", authRoutes);
require("./error-handling")(app);

//----------FRONTEND CONNECTION-----------///
app.use((req,res,next)=>{
    res.sendFile(__dirname+"/public/index.html")
    })

module.exports = app;
