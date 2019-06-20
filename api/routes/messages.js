var express = require("express");
var router = express.Router();

var messages =[
    {"message":"Most recently added message"}, 
    {"message":"best beaches in vancouver"},
    {"message":"Where to go camping?"},
    {"message":"Indonesia"}, 
    {"message":"Hello!"},
    {"message":"Learn React"},
    {"message":"Yes"},
    {"message":"@#()!"},
    {"message":"12345"},
    {"message":"Oldest message"}
];

/* GET messages listing. */
router.get('/', function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(messages));
});

/* POST a message. */ 
router.post('/', function(req,res,next){
    const newMessage = req.body;
    messages.unshift(newMessage);
    res.setHeader('Content-Type', 'application/json');
    res.send(newMessage);
});

/* CLEAR messages */
router.delete('/clearAll', function(req,res,next){
    messages=[];
});



module.exports = router;