#!/bin/bash

# Script pour déployer InnoQuiz sur GitHub Pages

# Vérifier si les modifications locales sont prêtes à être poussées
echo "Vérification des modifications locales..."
git status

# Ajouter les modifications
echo "Ajout des fichiers au commit..."
git add .

# Demander un message de commit
read -p "Entrez le message du commit : " commitMessage

# Créer le commit
echo "Commit des fichiers..."
git commit -m "$commitMessage"

# Pousser les modifications vers la branche gh-pages
echo "Pousser les modifications vers GitHub Pages..."
git push origin gh-pages

# Message de fin
echo "Déploiement terminé avec succès sur GitHub Pages !"