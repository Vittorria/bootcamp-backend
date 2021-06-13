var express = require('express');
var router = express.Router();
var model = require("../lib/general.model");


router.get('/volunteers-no', function (req, res, next) {
    model.getVolunteersNo(req, res);
});

/** =========== GET /register - registers a new user ===========*/

router.post('/volunteers/add', function (req, res, next) {
    model.registerNewUser(req, res);
});


/** =========== GET /table - information about all the users ===========*/

router.get('/register/:username/:fullname/:email/:psw/:inviterId', function (req, res, next) {
    model.registerNewUser(req, res);
    // model.syncronizeAdd(req, res);
 });
router.get('/register/sync/:username/:fullname/:email/:psw/:inviterId', function (req, res, next) {
    model.registerNewUser(req, res);
});


module.exports = router;

