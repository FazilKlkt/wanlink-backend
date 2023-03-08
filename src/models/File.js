const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    fileName: {
        type: String
    },
    filePath: {
        type: String
    },
    protectionType: {
        type: String,
        enum:['none','password','qrcode','time_limit']
    },
    password:{
        type: String
    },
    qrcode:{
        type: String
    }
}, {
    collection: 'File',
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('File', FileSchema);