const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');

const router = require('./routes/todoRoute');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(router);


const PORT = process.env.PORT || 5000;

const connect_db = async()=>{
    const URL = process.env.MONGODB_URL;
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL);
        console.log(`Database is connected`);
    }catch(err){
        console.log(`Database is not connected`);
    };
};

app.listen(PORT, async()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connect_db();
});