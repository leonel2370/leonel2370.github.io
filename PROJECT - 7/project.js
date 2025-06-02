// Variables
let heures = 0;
let minutes = 0;
let secondes = 0;
let millisecondes = 0;
let intervalle;
let estEnCours = false;
let resultats = []; // Tableau pour stocker les résultats

// Éléments HTML
const heuresElem = document.getElementById("heures");
const minutesElem = document.getElementById("minutes");
const secondesElem = document.getElementById("secondes");
const millisecondesElem = document.getElementById("millisecondes");
const demarrerBtn = document.getElementById("demarrer");
const arreterBtn = document.getElementById("arreter");
const reinitialiserBtn = document.getElementById("reinitialiser");
const sauvegarderBtn = document.getElementById("sauvegarder");
const resultatsElem = document.getElementById("resultats");

// Fonctions
function demarrerChronomètre() {
    if (!estEnCours) {
        estEnCours = true;
        intervalle = setInterval(mettreAJourChronomètre, 10);
    }
}

function arreterChronomètre() {
    estEnCours = false;
    clearInterval(intervalle);
}

function reinitialiserChronomètre() {
    arreterChronomètre();
    heures = 0;
    minutes = 0;
    secondes = 0;
    millisecondes = 0;
    resultats = []; // Réinitialiser les résultats
    mettreAJourAffichage();
    afficherResultats();
}

function mettreAJourChronomètre() {
    millisecondes += 10;
    if (millisecondes === 1000) {
        secondes++;
        millisecondes = 0;
    }
    if (secondes === 60) {
        minutes++;
        secondes = 0;
    }
    if (minutes === 60) {
        heures++;
        minutes = 0;
    }
    mettreAJourAffichage();
}

function mettreAJourAffichage() {
    heuresElem.textContent = padZero(heures);
    minutesElem.textContent = padZero(minutes);
    secondesElem.textContent = padZero(secondes);
    millisecondesElem.textContent = padZero(millisecondes, 3);
}

function padZero(nombre, longueur = 2) {
    return nombre.toString().padStart(longueur, "0");
}

function sauvegarderResultat() {
  
    if (!estEnCours && (heures !== 0 || minutes !== 0 || secondes !== 0 || millisecondes !== 0)) {
        const resultat = `${padZero(heures)}:${padZero(minutes)}:${padZero(secondes)}:${padZero(millisecondes, 3)}`;
        resultats.push(resultat);
        afficherResultats();
    }
}

function afficherResultats() {
    resultatsElem.innerHTML = "";
    resultats.forEach((resultat) => {
        const li = document.createElement("li");
        li.textContent = resultat;
        resultatsElem.appendChild(li);
        
        

    });
}

// Écouteurs d'événements
demarrerBtn.addEventListener("click", demarrerChronomètre);
arreterBtn.addEventListener("click", arreterChronomètre);
reinitialiserBtn.addEventListener("click", reinitialiserChronomètre);
sauvegarderBtn.addEventListener("click", sauvegarderResultat);

// Mise à jour initiale de l'affichage
mettreAJourAffichage();