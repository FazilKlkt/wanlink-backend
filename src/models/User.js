const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        uniue: true
    },
    username:{
        type:String
    },
    password: {
        type: String
    },
    files: [
        {
                type: mongoose.Schema.ObjectId,
                ref: 'File'   
        }
    ]
}, {
    collection: 'User',
    versionKey: false,
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = (await bcrypt.hash(this.password, 10)).toString();
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);