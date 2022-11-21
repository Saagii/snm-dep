const express = require('express')
const router = express.Router();
const User = require('../models/login.model');
const UserRegistration = require('../models/registration.model');
const jwt = require('jsonwebtoken');
var userId = null;

//Create a directory to save images
const fs = require('fs');
const path = require('path');


// *** Verify Token ***
function verifyToken(req, res, next) {
    console.log(req.headers);
    if(!req.headers.authorization) {
        return res.status(401).send('Unathorized Request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token == 'null') {
        return res.status(401).send('Unathorized Request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
        return res.status(401).send('Unathorized Request')
    }
    req.userId = payload.subject;
    userId = req.userId;
    console.log('********************************************* '+ req.userId + ' ********************************************* ');
    next();
}


// *** Test Router ***
router.get('/', (req, res) => {
    res.send('From Test Router');
});


// *** LoggedIn User Details ***
router.get('/loggedInUserDetails', (req, res) => {
    res.send('From Test Router');
});


// *** Register User ***
router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new UserRegistration(userData);
    console.log(user);

    User.findOne({email: userData.email}, (error, userExist) => {
        if(error) {
            console.log(error);
        } else {
            if(!userExist) {
                user.save((error, registeredUserResponse) => {
                    if(error) {
                        console.log(error);
                    } else {
                        let payload = {subject: registeredUserResponse._id}
                        let token = jwt.sign(payload, 'secretKey')
                        //Create a directory to save images
                        const DIR = './modules/images/';
                        fs.mkdir((DIR + registeredUserResponse._id), (err) => {
                            if (err) {
                                return console.error(err);
                            }
                            console.log('Directory created successfully!');
                        });
                        res.status(200).send({token});
                    }
                });
            } else {
                res.status(200).send(false);
            }
        }
    });
});


// *** Login User ***
router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if(error) {
            console.log(error);
        } else {
            if(!user) {
                res.status(401).send('Invalid email');
            } else if(user.password !== userData.password) {
                res.status(401).send('Invalid Password');
            } else {
                console.log('----------------------------- User Details ------------------------ ', user);
                let payload = {subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token, user});
            }
        }
    });
});


// *** Get User details ***
router.get('/userDetails', verifyToken, (req, res) => {
    console.log('********************************************* '+ userId + ' ********************************************* ');
    // User.find((error, user) => {
    //     if(error) {
    //         console.log(error)
    //     } else {
    //         // console.log(user);
    //         res.send(user);
    //     }
    // })
    User.findOne({_id: userId}, (error, user) => {
        if(error) {
            console.log(error);
        } else {
            if(!user) {
                res.status(401).send('Invalid User');
            } else {
                console.log('----------------------------- User Details ------------------------ ', user);
                let payload = {subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token, user});
            }
        }
    });
});

module.exports = router;