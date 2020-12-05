var express = require('express');
var router = express.Router();
var model = require("../lib/general.model");


/** =========== GET /register - registers a new user ===========*/

router.get('/table', function (req, res, next) {
    model.getTable(req, res);
});


/** =========== GET /table - information about all the users ===========*/

router.get('/register/:username/:fullname/:email/:psw/:inviterId', function (req, res, next) {
    model.registerNewUser(req, res);
    // model.syncronizeAdd(req, res);
 });
router.get('/register/sync/:username/:fullname/:email/:psw/:inviterId', function (req, res, next) {
    model.registerNewUser(req, res);
});


/** =========== DELETE /delete-user/:userId - returns the balance history of a given user ===========*/
router.get('/delete/:username', function (req, res, next) {
    model.deleteRecord(req, res);
    // model.syncronizeDelete(req, res);

});

router.get('/delete/sync/:username', function (req, res, next) {
    model.deleteRecord(req, res);
});

module.exports = router;

