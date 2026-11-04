import express from "express";
import "dotenv/config.js";
import app from "./app.js"



app.listen(process.env.PORT, ()=>{
    console.log(`Servidor On porta 3000: localhost:3000`);
})