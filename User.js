const mongoose = require('mongoose');

// Définition du schéma utilisateur
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10}$/, 'Veuillez entrer un numéro de téléphone valide à 10 chiffres']
    },
    score: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Méthode pour ajouter du score
userSchema.methods.addScore = function(points) {
    this.score += points;
    return this.save();
};

// Exporter le modèle utilisateur
const User = mongoose.model('User', userSchema);
module.exports = User;