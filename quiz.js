let currentQuestion = 0;
let score = 0;
const maxQuestions = 10; // Limiter à 10 questions par jour
let questions = [];

// Charger les questions du serveur ou des données locales
function fetchQuestions() {
    // Simulation de chargement depuis une API ou un fichier local
    questions = [
        {
            question: "Quel est le plus grand pays du monde par superficie ?",
            options: ["Canada", "Chine", "États-Unis", "Russie"],
            answer: 3
        },
        {
            question: "Quelle est la capitale du Japon ?",
            options: ["Tokyo", "Pékin", "Séoul", "Bangkok"],
            answer: 0
        },
        // Ajoutez plus de questions ici
    ];

    loadQuestion();
}

// Charger et afficher une nouvelle question
function loadQuestion() {
    if (currentQuestion < maxQuestions && currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        document.getElementById("question").textContent = questionData.question;
        document.querySelectorAll(".option").forEach((element, index) => {
            element.textContent = questionData.options[index];
        });
    } else {
        endQuiz();
    }
}

// Vérifier la réponse choisie
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score += 10000;
    }

    currentQuestion++;
    loadQuestion();
}

// Terminer le quiz et afficher les résultats
function endQuiz() {
    document.getElementById("question").textContent = "Quiz terminé !";
    document.querySelectorAll(".option").forEach(option => option.style.display = "none");
    document.getElementById("result").textContent = `Vous avez gagné ${score} FCFA !`;
    updateLeaderboard(); // Mise à jour du classement
}

// Charger les questions au démarrage
fetchQuestions();