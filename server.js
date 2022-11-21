const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
var path = require('path');


// *** Define Paths *** 
const authRoutes = require('./modules/auth/routes/routes');
const contactsRoutes = require('./modules/contact-manager/routes/contactDetailsRoutes');
const userScheduleRouters = require('./modules/contact-manager/routes/userScheduleRoutes');
const userDocumentsRouters = require('./modules/contact-manager/routes/userDocumentsRoutes');


// *** Cors ***
app.use(cors());


// *** Body-parser ***
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// *** Initiate MongoDb-Connection ***
const db = "mongodb+srv://Saagii:Goal123@cluster0.ztdhp.mongodb.net/crmdb?retryWrites=true&w=majority";

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if(err) {
        console.error('Error while connecting to MongoDb. Please re-check or Restart!!', err)
    } else {
        console.log('Connected to MongoDb');
    }
});


// *** Server Routes ***
app.use('/auth', authRoutes); // ** Authentication Routes **

app.use('/contacts', contactsRoutes); // ** Contacts Routes **

app.use('/schedule', userScheduleRouters); // ** Schedule Routes **

app.use('/userDocuments', userDocumentsRouters); // ** Schedule Routes **

// *** Access to UI ***
app.use(express.static(path.join(__dirname, 'public')));


// *** Build with UI ***
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


// *** Server Test URL ***
app.get('/', (req, res) => {
    res.send('Hello From Server');
});

app.listen(PORT, () => {
    console.log('Server is running...');
});