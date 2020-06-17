const mongoose = require('mongoose')


var nameSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true},
    login:  String ,
    email: { type: String, required: true,validate: /[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}/, unique: true},
    password: String,
    passwordConfirm: String,
    type: {
        type: Boolean,
        default: false
    }
   });
    
   var User = mongoose.model("admin", nameSchema);


module.exports = User