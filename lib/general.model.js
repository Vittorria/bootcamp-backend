var express = require('express'); 
var router = express.Router();
var db = require("../lib/db.js");
const http = require("http");
var nodemailer = require("../configs/nodemailer.config.js");


const dbSchema = 'public';
let self = {};

self.getVolunteersNo = function (req, res) {
    console.log('----- SELECT COUNT(*) FROM `volunteers` -----');
    const query = `SELECT COUNT(*) FROM ${dbSchema}.volunteers`;
    db.query(query).then((val) => {
        console.log('Result: ', val.rows);
        res.send(val.rows[0]);
    }).catch((err) => {
        res.status(500).end("Error: " + err);
    });
};

/** =========== POST /register - registers a new volunteer ===========*/

self.registerNewUser = function (req, res) { 
    console.log('-----SELECT * FROM public.f_add_new_volunteer -----');
    let params = [
        req.body.name,
        req.body.gender,
        req.body.email,
        req.body.bl_time_mng,
        req.body.bl_english,
        req.body.bl_leadership,
        req.body.comment,
    ];

    const query = `SELECT *FROM ${dbSchema}.f_add_new_volunteer(${params.map((el, i) => '$' + ++i).join(',')});`;

    db.query(query, params).then((val) => {
        console.log('Result: ', val.rows);
        res.send(val.rows[0]);

        nodemailer.sendConfirmationEmail(req.body.name, req.body.email);

    }).catch((err) => {
        res.status(500).end("Error: " + err);
    });
};

module.exports = self;

