let   contenantchoixOrdinateur = document.getElementById("choixOrdinateur")
let   contenantchoixUtilisateur = document.getElementById("choixUtilisateur")
let   buttonsChoixJeu = document.getElementById("buttonsChoixJeu")
let   contenantResultat= document.getElementById("resultat")

// evenements Click sur les buttons
let ChoixPossible = document.querySelectorAll("button")
let choixUtilisateur

ChoixPossible.forEach(ChoixPossible => ChoixPossible.addEventListener("click",(e) => {
choixUtilisateur = (e.target.id)
contenantchoixUtilisateur.innerHTML = `<img src= "${choixUtilisateur}.jpg">`
generateurChoixOrdinateur()
verification()
}));

// fonction pour generer le choix del'ordinateur
function generateurChoixOrdinateur(){
random = Math.floor(Math.random() * 3)+1// generer un nombre de  1 a 3

if(random === 1){
  choixOrdinateur = "pierre"

}
if(random === 2){
  choixOrdinateur = "papier"

}
if(random === 3){
  choixOrdinateur = "ciseau"

}
contenantchoixOrdinateur.innerHTML = `<img src= "${choixOrdinateur}.jpg">`

}

// function de verification
function verification(){
  if (choixUtilisateur == choixOrdinateur) {
    resultat ="egalite"
    contenantResultat.style.color = "#330"

    
  }
  if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
      contenantResultat.style.color = "green"
    resultat = "gagner!"

  }
  if(choixUtilisateur == "papier" && choixOrdinateur == "ciseau"){
      contenantResultat.style.color = "green"
      resultat = "gagner!"
  }
  if(choixUtilisateur == "ciseau" && choixOrdinateur == "pierre"){
      contenantResultat.style.color = "green"
      resultat = "gagner!"
  }

  //
  if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseau"){
      contenantResultat.style.color = "red"
    resultat = "perdu!"

  }
  if(choixUtilisateur == "papier" && choixOrdinateur == "ciseau"){
    contenantResultat.style.color = "red"
      resultat = "perdu!"
  }
  if(choixUtilisateur == "ciseau" && choixOrdinateur == "pierre"){
    contenantResultat.style.color = "red"
    resultat = "perdu!"
  }    
    contenantResultat.innerHTML =resultat
  
  }



