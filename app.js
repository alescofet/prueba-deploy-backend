require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);
require('./config/cors.config')(app)


const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
require("./error-handling")(app);

module.exports = app;