var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");
let sauter = document.getElementById("sauter")
let starts = document.getElementById("start")
section = document.querySelector("section")


sauter.addEventListener("click",() => {
    // function pour faire sauter le personnage
    if(perso.classList != "animation"){
        perso.classList.add('animation'); 
    }
    setTimeout(function(){
        perso.classList.remove('animation'); 
    },500)
})

function startGame() {
    gameRunning = true;
    score = 0;
    // scoreDisplay.textContent = "Score: " + score;
    obstacles.style.animation = "obstacleMove 2s linear infinite"; // Animation CSS pour déplacer l'obstacle
}

function endGame() {
    gameRunning = false;
    obstacles.style.animation = "none";
    section.innerHTML="Vous avez perdu! Score: " + score;
    startGame(); // Redémarrer le jeu
}

var verification = setInterval(function() {
    if (!gameRunning) return; // Arrêter la vérification si le jeu est terminé

    var persoRect = perso.getBoundingClientRect();
    var obstaclesRect = obstacles.getBoundingClientRect();

    if (
        persoRect.right > obstaclesRect.left &&
        persoRect.left < obstaclesRect.right &&
        persoRect.bottom > obstaclesRect.top
    ) {
        endGame();
    } else {
        score++;
        // scoreDisplay.textContent = "Score: " + score;
    }
}, 256); 

startGame(); // Démarrer le jeu au chargement de la page
