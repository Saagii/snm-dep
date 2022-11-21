const express = require('express')
const router = express.Router();
const ContactDetails = require('../models/contactDetails.model');
const jwt = require('jsonwebtoken');


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
    console.log(req.userId)
    next();
}


// *** Get User details ***
router.get('/userDetails', verifyToken, (req, res) => {
    User.find((error, user) => {
        if(error) {
            console.log(error)
        } else {
            console.log(user);
            res.send(user);
        }
    })
});


// *** Create Contact ***
router.post('/create', verifyToken, (req, res) => {
    let contactData = req.body;
    let contact = new ContactDetails(contactData);
    contact.save((error, createdContactResponse) => {
        if(error) {
            console.log(error);
        } else {
            res.status(200).send(createdContactResponse);
        }
    });
});

// *** Get Contacts List ***
router.get('/list', verifyToken, (req, res) => {
    ContactDetails.find((error, user) => {
        if(error) {
            console.log(error)
        } else {
            console.log(user);
            res.send(user);
        }
    })
});

// *** Get Single Contact Details ***
router.get('/:id/details', verifyToken, (req, res) => {
    let { id } = req.params;
    ContactDetails.findOne({_id: id}, (error, contactDetails) => {
        if(error) {
            console.log(error);
        } else {
            console.log(contactDetails);
            res.send(contactDetails);
        }
    });
});

// *** Update Contact Details ***
router.put('/:id/details', verifyToken, (req, res) => {
    let { id } = req.params;
    let value = req.body;
    console.log(req.body);
    ContactDetails.findOneAndUpdate({_id: id}, value, {new: true}, (error, contactDetails) => {
        if(error) {
            console.log(error);
        } else {
            console.log(contactDetails);
            res.send(contactDetails);
        }
    });
});


// *** Search and Get the contacts list ***
router.post('/search', verifyToken, (req, res) => {
    console.log(req.body);
    let value = req.body;
    console.log(value);

    // let { id } = req.params;
    ContactDetails.find(value, (error, contactDetails) => {
        if(error) {
            console.log(error);
        } else {
            console.log('**********',contactDetails);
            res.send(contactDetails);
        }
    });
});


// *** Retire Contact ***
router.put('/:id/retire', verifyToken, (req, res) => {
    let { id } = req.params;
    // let value = req.body;
    // console.log(req.body);
    ContactDetails.findOneAndUpdate({_id: id}, {isActive: false}, {new: true}, (error, contactDetails) => {
        if(error) {
            console.log(error);
        } else {
            console.log(contactDetails);
            res.send(contactDetails);
        }
    });
});


// *** Activate Contact ***
router.put('/:id/activate', verifyToken, (req, res) => {
    let { id } = req.params;
    // let value = req.body;
    // console.log(req.body);
    ContactDetails.findOneAndUpdate({_id: id}, {isActive: true}, {new: true}, (error, contactDetails) => {
        if(error) {
            console.log(error);
        } else {
            console.log(contactDetails);
            res.send(contactDetails);
        }
    });
});


// *** Mark Favourite Contact ***
router.put('/:id/markFavourite', verifyToken, (req, res) => {
    let { id } = req.params;
    // let value = req.body;
    // console.log(req.body);
    ContactDetails.findOneAndUpdate({_id: id}, {isFavourite: true}, {new: true}, (error, contactDetails) => {
        if(error) {
            console.log(error);
        } else {
            console.log(contactDetails);
            res.send(contactDetails);
        }
    });
});


// *** Mark Favourite Contact ***
router.put('/:id/unmarkFavourite', verifyToken, (req, res) => {
    let { id } = req.params;
    // let value = req.body;
    // console.log(req.body);
    ContactDetails.findOneAndUpdate({_id: id}, {isFavourite: false}, {new: true}, (error, contactDetails) => {
        if(error) {
            console.log(error);
        } else {
            console.log(contactDetails);
            res.send(contactDetails);
        }
    });
});

module.exports = router;