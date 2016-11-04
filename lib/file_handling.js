'use strict';

let multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname+'-'+Date.now());
    }
});

let upload = multer({storage: storage}).single('photo');

module.exports = upload;