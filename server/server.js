import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app=express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))       //increase data limit for file64 data convert
app.use(express.json());
app.use(express.urlencoded({extended:true }));
app.use(
    cors({
        origin:"*",
        credentials:true,                                                                                       //access-control-allow-credentials:true
        optionSuccessStatus:200,
    })
)
dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL)




app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`)
})