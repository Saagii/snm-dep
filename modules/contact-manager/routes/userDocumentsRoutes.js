const express = require('express');
const router = express.Router();
const UserDocuments = require('../models/userDocuments.model');
const jwt = require('jsonwebtoken');
const multer = require('multer');

// Set UserId
var userId = '';

//Create a directory to save images
const fs = require('fs');
const path = require('path');

// Multer File upload settings
var DIR = '';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('First'+ DIR);
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    // fs.mkdir(path.join(DIR, userId), (err) => {
    //   if (err) {
    //       return console.error(err);
    //   }
    //   console.log('Directory created successfully!');
    //   const fileName = userId + '-' + file.originalname.toLowerCase().split(' ').join('-');
    //   console.log(fileName);
    //   cb(null, fileName)
    // });

    const fileName = file.originalname.toLowerCase().split(' ').join('-');
      console.log(fileName);
      console.log('Second'+ DIR);
      cb(null, fileName)
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


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
    DIR = './modules/images/' + userId + '/';
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
router.post('/addUserProfile', verifyToken, upload.single('file'), (req, res) => {
  var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    // var final_img = {
    //     contentType:req.file.mimetype,
    //     image:new Buffer.from(encode_img,'base64')
    // };

    console.log('####' + req.protocol + '://' + req.get('host') + '####');
    const url = req.protocol + '://' + req.get('host');
    console.log(req.body);
    console.log(req.documentUploadedDate);
    console.log(req.userId);
    const userProfile = new UserDocuments({
        documentName: req.file.filename,
        documentType: req.file.type,
        documentUrl: url + '/modules/images/' + req.file.filename,
        documentUploadedDate: req.body.documentUploadedDate,
        img: {
          contentType:req.file.mimetype,
          data:new Buffer.from(encode_img,'base64')
        },
        userId: userId,
      });

      console.log(userProfile);

      userProfile.save((error, createdScheduleResponse) => {
            if(error) {
                console.log(error);
            } else {
                res.status(200).send(createdScheduleResponse);
            }
        });


    //   userProfile.save().then(result => {
    //     console.log(result);
    //     res.status(201).json({
    //       message: "User Profile Updated successfully!",
    //       result
    //     })
    //   }).catch(err => {
    //     console.log(err),
    //       res.status(500).json({
    //         error: err
    //       });
    //   })

    // let fileData = 
    // let scheduleData = req.body;
    // let schedule = new UserSchedule(scheduleData);
    // schedule.save((error, createdScheduleResponse) => {
    //     if(error) {
    //         console.log(error);
    //     } else {
    //         res.status(200).send(createdScheduleResponse);
    //     }
    // });
});

module.exports = router;

// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/

// https://www.tutsmake.com/file-upload-in-mongodb-using-node-js/