const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    message: String,
    link: String
}, {timestamps: true});

module.exports = mongoose.model('Messages', messageSchema);