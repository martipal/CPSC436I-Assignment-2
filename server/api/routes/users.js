var express = require('express');
var router = express.Router();

var users = [
  {
    "username": "dgipps",
    "first_name": "Daniel",
    "last_name": "Gipps"
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(users));
});

module.exports = router;
