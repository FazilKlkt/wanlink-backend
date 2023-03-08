const util = require("util");
const multer = require('multer');
const maxSize = 40 * 1024 * 1024;
const path = require('path');

const storage = multer.diskStorage({
    destination: __basedir + '/resources/static/assets/uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

let uploadFileMiddleware = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        if (ext !== '.pdf' && ext !== '.doc' && ext !== '.docx' && ext !== '.xlsx' && ext !== '.xls' && ext !== '.odt' && ext !== '.zip' && ext !== '.txt') {
            return cb(new Error('not an Document'), false)
        }
        cb(null, true)
    },
    limits: { fileSize: maxSize },
}).single('file');

let upload = util.promisify(uploadFileMiddleware);
module.exports = { upload };
