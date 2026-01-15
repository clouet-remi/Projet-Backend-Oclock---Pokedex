import { sequelize } from "../../models/index.js";

console.log("Delete existing tables..."); 
await sequelize.drop(); 

console.log("Defining our tables..."); 
await sequelize.sync(); 

console.log("Our DB's structure: ", await sequelize.getQueryInterface().showAllTables()); 

console.log("Migration done ! DB's closing..."); 
await sequelize.close(); 