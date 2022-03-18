const express = require('express');
const authROute = require('./routes/auth');
const passportSetup = require('./config/passport-setup');

const app = express();

app.set('view engine', 'ejs');
app.use('/auth',authROute);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('hello motto');
});