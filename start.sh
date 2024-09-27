#!/bin/bash

# Script pour démarrer le serveur backend de InnoQuiz

# Vérifier si les dépendances sont installées
if [ ! -d "node_modules" ]; then
  echo "Installation des dépendances..."
  npm install
fi

# Démarrer le serveur Node.js
echo "Démarrage du serveur backend sur le port 3000..."
npm start

# Vérifier si le serveur est bien démarré
if [ $? -eq 0 ]; then
  echo "Le serveur backend est démarré avec succès !"
else
  echo "Échec du démarrage du serveur. Vérifiez les erreurs."
fi