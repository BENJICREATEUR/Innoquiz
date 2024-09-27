const mongoose = require('mongoose');

// Définition du schéma des questions de quiz
const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],  // Un tableau d'options de réponse
        validate: {
            validator: function(arr) {
                return arr.length === 4;  // S'assurer qu'il y a exactement 4 options
            },
            message: 'Il doit y avoir exactement 4 options de réponse'
        }
    },
    answer: {
        type: Number, // Index de la bonne réponse (0, 1, 2 ou 3)
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Exporter le modèle de question de quiz
const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;