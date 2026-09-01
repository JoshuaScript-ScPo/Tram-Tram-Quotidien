let score = 0;
const reponsesUtilisees = new Set();

let questionsRestantes = [];

function melangerQuestions() {
    questionsRestantes = [...questions];

    for (let i = questionsRestantes.length - 1; i > 0; i--) {
        const positionAleatoire =
            Math.floor(Math.random() * (i + 1));

        [
            questionsRestantes[i],
            questionsRestantes[positionAleatoire]
        ] = [
            questionsRestantes[positionAleatoire],
            questionsRestantes[i]
        ];
    }
}

function obtenirQuestionSuivante() {
    if (questionsRestantes.length === 0) {
        melangerQuestions();
    }

    return questionsRestantes.pop();
}

function normaliser(texte) {
    return texte
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function afficherQuestion() {
    document.getElementById("question").textContent =
        questionActuelle.texte;

    const nombreReponses = stations.filter(
        station => questionActuelle.verifier(station)
    ).length;

    document.getElementById("answerCount").textContent =
        nombreReponses +
        (nombreReponses === 1
            ? " possible answer"
            : " possible answers");
}

function afficherBoutonSuivant() {
    document.getElementById("answerControls").style.display = "none";
    document.getElementById("nextQuestion").style.display = "block";
}

function afficherBarreReponse() {
    document.getElementById("answerControls").style.display = "flex";
    document.getElementById("nextQuestion").style.display = "none";
}

melangerQuestions();

let questionActuelle = obtenirQuestionSuivante();

afficherQuestion();

document
    .getElementById("checkAnswer")
    .addEventListener("click", function () {

        const champReponse =
            document.getElementById("answer");

        const reponse =
            champReponse.value.trim();

        const stationTrouvee = stations.find(
            station =>
                normaliser(station.nom) === normaliser(reponse)
        );

        const identifiantReponse =
            questionActuelle.texte +
            "|" +
            normaliser(reponse);

        if (reponse === "") {

            document.getElementById("result").innerHTML =
                "<b><span style='color:red'>NO ANSWER<br><span style='color:black'>You must enter a station</span></span></b>";

            return;
        }

        if (reponsesUtilisees.has(identifiantReponse)) {

            document.getElementById("result").innerHTML =
                "<b><span style='color:orange'>ANSWER ALREADY USED<br><span style='color:black'>You're a goldfish for real</span></span></b>";

        } else if (
            stationTrouvee &&
            questionActuelle.verifier(stationTrouvee)
        ) {

            reponsesUtilisees.add(identifiantReponse);
            let pointsGagnes = 1;

if (
    stationTrouvee.points &&
    stationTrouvee.points[questionActuelle.caracteristique] !== undefined
) {
    pointsGagnes =
        stationTrouvee.points[questionActuelle.caracteristique];
}

score += pointsGagnes;

            document.getElementById("score").textContent =
                "Score: " + score;

            document.getElementById("result").innerHTML =
                "<b><span style='color:#009688'>GOOD ANSWER<br>" +
                "<span style='color:black'>+" +
             pointsGagnes +
            (pointsGagnes === 1 ? " point" : " points") +
                "</span></span></b>";

        } else {

            document.getElementById("result").innerHTML =
                "<b><span style='color:red'>YOU ARE WRONG<br><span style='color:black'>Please resign from your position at S&S</span></b>";
        }

        afficherBoutonSuivant();
    });

document
    .getElementById("nextQuestion")
    .addEventListener("click", function () {

        questionActuelle = obtenirQuestionSuivante();

        afficherQuestion();
        afficherBarreReponse();

        document.getElementById("answer").value = "";
        document.getElementById("result").innerHTML = "";
        document.getElementById("answer").focus();
        suggestions.innerHTML = "";
        suggestions.style.display = "none";
    });

const champReponse = document.getElementById("answer");
const suggestions = document.getElementById("suggestions");

champReponse.addEventListener("input", function () {
    const recherche = normaliser(champReponse.value);

    suggestions.innerHTML = "";

    if (
        questionActuelle.autocomplete === false ||
        recherche.length < 3
    ) {
        suggestions.style.display = "none";
        return;
    }

    const troisPremieresLettres = recherche.slice(0, 3);

    const stationsCorrespondantes = stations.filter(
        station =>
            normaliser(station.nom).startsWith(troisPremieresLettres)
    );

    if (stationsCorrespondantes.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    stationsCorrespondantes.forEach(function (station) {
        const suggestion = document.createElement("div");

        suggestion.textContent = station.nom;
        suggestion.classList.add("suggestion");

        suggestion.addEventListener("click", function () {
            champReponse.value = station.nom;
            suggestions.innerHTML = "";
            suggestions.style.display = "none";
        });

        suggestions.appendChild(suggestion);
    });

    suggestions.style.display = "block";
});