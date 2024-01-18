import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seederRouter from './routers/seederRouter.js';

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

 

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL)


app.use('/api/seeder', seederRouter)


app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`)
})