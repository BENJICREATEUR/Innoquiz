const axios = require('axios');

// Fonction pour traiter le paiement via Moov Money
exports.processPayment = async (req, res) => {
    const { phoneNumber, amount } = req.body;

    // Validation des données
    if (!phoneNumber || !amount || amount <= 0) {
        return res.status(400).json({ success: false, message: 'Données de paiement invalides' });
    }

    try {
        // Appel à l'API Moov Money pour transférer les fonds
        const response = await axios.post('https://api.moov.money/v1/transactions', {
            client_id: process.env.MOOV_CLIENT_ID,
            client_secret: process.env.MOOV_CLIENT_SECRET,
            to: phoneNumber,
            amount: amount,
            currency: 'XOF'
        });

        if (response.data.status === 'success') {
            res.json({ success: true, message: 'Paiement effectué avec succès' });
        } else {
            res.status(500).json({ success: false, message: 'Erreur lors du paiement' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erreur du serveur lors du traitement du paiement' });
    }
};