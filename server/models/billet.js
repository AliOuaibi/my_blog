const mongoose = require('mongoose')

var nameSchema = new mongoose.Schema({
    NumeroBillet: { type: Number, required: true, unique: true},
    titre: String,
    prix: { type: String, required: true},
    description: String,
    categorie: String,
    type: {
        type: Boolean,
        default: false
    }
   });
    
   var Billet = mongoose.model("billet", nameSchema);


module.exports = Billet