// Import necessary libraries and modules
const express = require("express");
const app = express();
const cors = require("cors");
const { databaseconnection } = require("./database/db");
const userroute = require("./route");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Enable JSON request parsing
app.use(express.json());
app.use(cookieParser());
app.use(cors());
  
// Establish a connection to the database
databaseconnection();

// Set the server port
const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
app.get("/", (req, res) => res.send("your server is running"));

// Enable CORS for all routes

// Set up the main route using the userroute module
app.use("/", userroute);
