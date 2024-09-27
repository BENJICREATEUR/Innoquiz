const axios = require('axios');

// Configuration des identifiants Moov Money
const MOOV_API_URL = 'https://api.moov.money/v1/transactions';

// Crée une fonction pour initier une transaction via Moov Money
const initiateMoovTransaction = async (phoneNumber, amount) => {
    try {
        const response = await axios.post(MOOV_API_URL, {
            client_id: process.env.MOOV_CLIENT_ID,
            client_secret: process.env.MOOV_CLIENT_SECRET,
            to: phoneNumber,
            amount: amount,
            currency: 'XOF',
        });

        if (response.data.status === 'success') {
            console.log('Transaction réussie via Moov Money');
            return { success: true, message: 'Transaction réussie' };
        } else {
            console.log('Échec de la transaction via Moov Money');
            return { success: false, message: 'Échec de la transaction' };
        }
    } catch (error) {
        console.error('Erreur lors de la transaction Moov Money :', error.message);
        return { success: false, message: 'Erreur lors de la transaction Moov Money' };
    }
};

module.exports = initiateMoovTransaction;