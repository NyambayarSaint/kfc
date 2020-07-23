const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const publicDirectoryPath = path.join(__dirname, "./public");

// EXPRESS SERVER SETTINGS
app.use(express.static(publicDirectoryPath));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// LOADING THE DATABASE
require("dotenv").config();
require("./db");

// LINKING THE PRE DEFINED ROUTES
app.use(require("./routers/Authenticate"));
app.use(require("./routers/User"));

app.listen(port, () => {
    console.log("Server is up on port " + port);
});
