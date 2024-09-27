const User = require('../models/User');

// Création d'un utilisateur
exports.createUser = async (req, res) => {
    const { name, phoneNumber } = req.body;

    // Validation des données
    if (!name || !phoneNumber) {
        return res.status(400).json({ success: false, message: 'Tous les champs sont requis' });
    }

    try {
        const newUser = new User({ name, phoneNumber, score: 0 });
        await newUser.save();
        res.json({ success: true, user: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erreur lors de la création de l’utilisateur' });
    }
};

// Mise à jour du score de l'utilisateur
exports.updateScore = async (req, res) => {
    const { userId, score } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'Utilisateur non trouvé' });
        }

        user.score += score;  // Ajout du score au score actuel
        await user.save();

        res.json({ success: true, message: 'Score mis à jour', user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour du score' });
    }
};

// Obtenir le classement
exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await User.find().sort({ score: -1 }).limit(10);  // Récupérer les 10 meilleurs joueurs
        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erreur lors du chargement du classement' });
    }
};