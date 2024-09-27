let currentQuestion = 0;
let score = 0;
const questions = [
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
  {
    question: "Combien y a-t-il de continents sur Terre ?",
    options: ["5", "6", "7", "8"],
    answer: 2
    },
  {
    question: "Quel est l'élément chimique avec le symbole O ?",
    options: ["Oxygène", "Or", "Osmium", "Ozone"],
    answer: 0
    }
    // Ajoutez plus de questions ici
];

function loadQuestion() {
  if (currentQuestion < questions.length) {
    const questionData = questions[currentQuestion];
    document.getElementById("question").textContent = questionData.question;
    document.querySelectorAll(".option").forEach((element, index) => {
      element.textContent = questionData.options[index];
    });
  } else {
    endQuiz();
  }
}

function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].answer) {
    score += 10000;
  }
  currentQuestion++;
  loadQuestion();
}

function endQuiz() {
  document.getElementById("question").textContent = "Quiz terminé !";
  document.querySelectorAll(".option").forEach(option => option.style.display = "none");
  document.getElementById("result").textContent = `Vous avez gagné ${score} FCFA !`;
}

function withdraw() {
  const phoneNumber = document.getElementById("phone-number").value;
  if (/^\d{10}$/.test(phoneNumber)) {
    fetch('http://localhost:3000/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          amount: score
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("Vous avez retiré " + score + " FCFA sur votre compte Moov Money avec succès !");
          score = 0; // Réinitialiser le score après le retrait
          document.getElementById("score").textContent = "Votre solde est maintenant de 0 FCFA.";
        } else {
          alert("Échec de la transaction. Veuillez réessayer.");
        }
      })
      .catch(error => {
        console.error("Erreur:", error);
        alert("Erreur lors de la transaction. Veuillez réessayer plus tard.");
      });
  } else {
    alert("Veuillez entrer un numéro de téléphone valide (10 chiffres).");
  }
}

// Charger la première question au démarrage
loadQuestion();