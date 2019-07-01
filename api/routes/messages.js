var express = require("express");
var router = express.Router();

const mongoose = require('mongoose');
const Message = require('../models/message.js');

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox-iemj8.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true });

var messages = [
    { "message": "Most recently added message" },
    { "message": "best beaches in vancouver" },
    { "message": "Where to go camping?" },
    { "message": "Indonesia" },
    { "message": "Hello!" },
    { "message": "Learn React" },
    { "message": "Yes" },
    { "message": "@#()!" },
    { "message": "12345" },
    { "message": "Oldest message" }
];

/* GET messages listing. */
router.get('/', function (req, res) {
    Message.find().exec().then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.get('/withLinks', function(req,res){
    Message.find({
        link: {$ne: "default"}
    }).exec().then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

/* POST a message. */
router.post('/', function (req, res, next) {
    const message = new Message({
        _id: new mongoose.Types.ObjectId(),
        message: req.body.message,
        link: req.body.link
    })
    message.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handling POST requests to /messages",
            createdMessage: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    res.send(message);
});

/* CLEAR messages */
router.delete('/clearAll', function (req, res, next) {
    Message.deleteMany({}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
});





module.exports = router;