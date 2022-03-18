const express = require('express');
const authROute = require('./routes/auth');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./config/passport-setup');

const app = express();

app.set('view engine', 'ejs');

mongoose.connect(keys.mongodb.uri)
    .then(()=>{
        console.log('connected');
    })
    .catch((e)=>{
        console.log(e);
    });

app.use('/auth',authROute);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('hello motto');
});