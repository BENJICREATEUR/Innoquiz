const express = require('express');
const axios = require('axios');
const router = express.Router();

const MOOV_API_URL = 'https://api.moov.money/v1/transactions';
const CLIENT_ID = 'votre_client_id';
const CLIENT_SECRET = 'votre_client_secret';

// Route pour le retrait des gains
router.post('/withdraw', async (req, res) => {
  const { phoneNumber, amount } = req.body;

  // Validation des données d'entrée
  if (!phoneNumber || !amount || amount <= 0) {
    return res.status(400).json({ success: false, message: 'Données invalides' });
  }

  try {
    // Appel à l'API Moov Money pour effectuer le transfert
    const response = await axios.post(MOOV_API_URL, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      to: phoneNumber,
      amount: amount,
      currency: 'XOF'
    });

    // Vérification de la réponse de l'API
    if (response.data.status === 'success') {
      res.json({ success: true, message: 'Retrait réussi' });
    } else {
      res.status(500).json({ success: false, message: 'Erreur de transaction' });
    }
  } catch (error) {
    console.error('Erreur lors de la transaction Moov Money :', error);
    res.status(500).json({ success: false, message: 'Erreur du serveur' });
  }
});

module.exports = router;