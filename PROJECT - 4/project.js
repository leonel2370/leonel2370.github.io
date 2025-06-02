// recuprartion des variable
let  button2 = document.getElementById("copy")
let button = document.getElementById("generer")
let passwordBox = document.querySelector(".passwordBox")


// fonction generer
function generer(){
button.addEventListener("click",() => {
let chars= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let passwordLength = 16;
let password = " ";  

//boucle qui recupere le caractere et dans la varible password
for( let i= 0 ; i<passwordLength; i++ ){

//math.random creer un nombre entre 0(inclu) et 1(exclu), 
  let randomNumber = Math.floor(Math.random() * chars.length)

//subtring vas recuperer les position  mettre dans la chaine password
password += chars.substring(randomNumber, randomNumber +1)

// on recupere la valeur de la chaine de caracter et on vas le mettre dans le chanmp input 
document.getElementById('password').value = password;
}

})
}
//lancer la  fonction
generer()

// fonction copy
button2.addEventListener("click",() => {
var inputPassword = document.getElementById("password")
if(inputPassword.value.length >=16){
inputPassword.select()
document.execCommand('copy');
inputPassword.value=""

}else{
alert( "veillez generer un mot de passe")

}

})



