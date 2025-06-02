let  nb1 = document.querySelector('.nb1')
var nb2 = document.querySelector('.nb2')
var op = document.querySelector(".op")
var message = document.querySelector(".message") 
let score = document.querySelector(".score")
var link = document.querySelector(".link")
var section = document.querySelector("section")
let submit = document.getElementById("submit")
let resultat = document.querySelector(".res")

// nombre Aleatoires  petit du jeu
random1 = Math.random() * 11 << 0
random2 = Math.random() * 11 << 0
console.log(random1)
console.log(random2)

//inserer les premiers les nombres au hasard dans les variables
nb1.innerHTML = random1
nb2.innerHTML = random2
let core =0

//finction btn submit
 
  submit.addEventListener("click", () =>{
    //recuperer les resultat entre par le joueur
    var resp = document.querySelector(".res").value
    if(random1 + random2 == resp){
    message.style.backgroundColor = "green"
    message.style.display = "block"
    message.innerHTML = "Correcte"
    // message.style.transition= "1s"
    
    // nombre Aleatoires  petit du jeu
    random1 = Math.random() * 11 << 0
    random2 = Math.random() * 11 << 0
    
    //inserer les premiers les nombres au hasard dans les variables
    nb1.innerHTML = random1
    nb2.innerHTML = random2
    core = core +1 
    score.innerHTML = `<span style="font-size:200px;">${core}</span></br> Score`
    resultat.value=" "
    resultat.focus()
    
    
    
    }else{
    message.style.backgroundColor = "red"
    message.innerHTML = "InCorrecte"
    section.innerHTML = " "
    score.innerHTML = `<span style="font-size:200px;">${core}</span></br> Score`
    link.style.display = "block"
    }
    })
 

 //RECOMMENCER LE JEUX
 link.addEventListener("click", lancer() )
