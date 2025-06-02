
//recuperer les varaible
let tache = document.getElementById('tache')
let ajouter = document.getElementById('ajouter')
let listeTaches = document.getElementById('listeTaches')


// fontion ajouter
ajouter.addEventListener('click', () => {
if(tache.value.length>0){
  let nouvelleTache = document.createElement("li")
  let boutonSupprimer = document.createElement('button')
  
  //creer le button supprimer 
  boutonSupprimer.textContent = 'Supprimer'
  boutonSupprimer.addEventListener('click', function() {
      listeTaches.removeChild(nouvelleTache)
  })

  //ajouter les li et remove a leur parents
  nouvelleTache.textContent = tache.value;
  nouvelleTache.appendChild(boutonSupprimer)
  listeTaches.appendChild(nouvelleTache)
  tache.value = ''

}else{

  listeTaches.innerHTML = "<p class='error'> Tu veux `<span style='border:1px solid #ccc;color:black; background-color:#ccc '>Ajouter</span>` sans remplir quelque chose, MBOUTMAN!!</p>"
  listeTaches.style.display ="flex"
  listeTaches.style.backgroundColor ="red"
  listeTaches.style.color ="white"
  listeTaches.style.fontWeight ="500"
  ajouter.addEventListener('click', () => {
  ajouter.disabled= true
  })

}
  
});