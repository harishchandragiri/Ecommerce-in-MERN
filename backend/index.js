import express from "express";

const ENV = process.env;

 const app = express();

 app.listen(ENV.PORT, ()=>{
    console.log('server is running in port no 3001')
 })