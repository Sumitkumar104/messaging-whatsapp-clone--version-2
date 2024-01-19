const express=require("express");
const app=express();
const cors=require("cors");
const {databaseconnection} =require("./database/db");
const userroute=require("./route");

require("dotenv").config();

app.use(express.json());
  
// also call the databse connection
databaseconnection();

const PORT=8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(cors());
app.use("/", userroute);