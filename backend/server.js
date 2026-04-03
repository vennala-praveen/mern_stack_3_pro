const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');
// const cors = require('cors');

// express app
const app = express();


// middleware
app.use(express.json());
// app.use(cors());

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workouts', workoutRoutes);


// db connection
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        // listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to DB & Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error)
    })

