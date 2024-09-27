const leaderboard = [];

// Mettre à jour le classement avec le score actuel
function updateLeaderboard() {
    const playerName = prompt("Entrez votre nom pour le classement :");
    
    if (playerName && score > 0) {
        leaderboard.push({ name: playerName, score: score });
        leaderboard.sort((a, b) => b.score - a.score); // Trier par score décroissant
        saveLeaderboard();
        displayLeaderboard();
    }
}

// Sauvegarder le classement dans le localStorage
function saveLeaderboard() {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Charger le classement depuis le localStorage
function loadLeaderboard() {
    const storedLeaderboard = localStorage.getItem('leaderboard');
    if (storedLeaderboard) {
        leaderboard.push(...JSON.parse(storedLeaderboard));
    }
    displayLeaderboard();
}

// Afficher le classement
function displayLeaderboard() {
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = leaderboard.map(player => 
        `<li>${player.name}: ${player.score} FCFA</li>`).join('');
}

// Charger le classement dès le démarrage
loadLeaderboard();