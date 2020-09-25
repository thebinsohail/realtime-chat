var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Complaint Registration',system:'Complaint Management System' ,route:"Register Your Complaint"});
});

module.exports = router;
