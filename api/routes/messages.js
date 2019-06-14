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
router.get('/', function(req,res,next){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(messages));
});

module.exports = router;