const express = require('express');
const router = express.Router();
const UserSchedule = require('../models/userSchedule.model');
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


// *** Get Contacts List ***
router.get('/:date/scheduleList', verifyToken, (req, res) => {
    let { date } = req.params;
    UserSchedule.find({scheduleDate: date}, (error, user) => {
        if(error) {
            console.log(error)
        } else {
            console.log(user);
            res.send(user);
        }
    })
});


// *** Create Schedule ***
router.post('/createSchedule', verifyToken, (req, res) => {
    let scheduleData = req.body;
    let schedule = new UserSchedule(scheduleData);
    schedule.save((error, createdScheduleResponse) => {
        if(error) {
            console.log(error);
        } else {
            res.status(200).send(createdScheduleResponse);
        }
    });
});

module.exports = router;