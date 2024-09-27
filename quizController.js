const Quiz = require('../models/Quiz');

// Fonction pour charger les questions du quiz
exports.getQuestions = async (req, res) => {
    try {
        const questions = await Quiz.find();  // Récupérer toutes les questions depuis la base de données
        res.json(questions);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erreur lors du chargement des questions' });
    }
};

// Fonction pour vérifier la réponse
exports.checkAnswer = (req, res) => {
    const { questionId, selectedOption } = req.body;
    
    // Recherche de la question par ID
    Quiz.findById(questionId, (err, question) => {
        if (err || !question) {
            return res.status(404).json({ success: false, message: 'Question non trouvée' });
        }

        // Vérification de la réponse
        if (selectedOption === question.answer) {
            res.json({ success: true, message: 'Bonne réponse !' });
        } else {
            res.json({ success: false, message: 'Mauvaise réponse' });
        }
    });
};