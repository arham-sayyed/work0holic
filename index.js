const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const config = require('./config/database'); 

const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');

const app = express();

// Connect to Database
mongoose.connect(config.database);

//Check Connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('Database error '+ err);
});


// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRoute);
app.use('/users',userRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
