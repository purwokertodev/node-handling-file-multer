'use strict';

let express = require('express');
let morgan = require('morgan');
let upload = require('./file_handling');

let app = express();
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.status(200).send({message: 'your app is already to use'});
    next();
});

app.post('/api/register', (req, res, next) => {
    upload(req, res, (err) => {
        if(err){
            res.status(500).send({message: `error on : ${err}`});
        } else {
            res.status(200).send({message: 'file is uploaded'});
            next();
        }
    });
});

module.exports = app;