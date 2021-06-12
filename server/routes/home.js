/**
 * @file 
 * home.js
 *
 * Hyekyeong Park || 301148613 || COMP229 || Assignment2
 */

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let fName = '';
let lName = '';
let eMail = '';
let pNumber = '';
let message = '';
let sPost = '';


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', 
  { title: 'Home' ,
    fName:fName,
    lName:lName,
    eMail:eMail,
    pNumber:pNumber,
    message:message,
    sPost:sPost, 
    displayName: req.user ? req.user.displayName : ''
    });
    sPost = '';
});



module.exports = router;


