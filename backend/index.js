import express from "express";
import dotenv from 'dotenv';
import DB_CONNECTION from './db/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3003;

// Database connection 
DB_CONNECTION();


 app.listen(port, ()=>{
    console.log(`server is running in port no ${port}`)
 })