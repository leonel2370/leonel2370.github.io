
// recupere les variable  
let button_code_bar = document.getElementById("button_code_bar")
let text = document.getElementById("text")
let box = document.getElementById("box")
let pdf_box = document.getElementById("pdf_box")
let h4 = document.getElementById("h4")

// fonction  pour telecharger le fichiers, en cliquant sur le button
function createPDF(){
var opt = {
margin:       1,
filename:     `${text.value}.pdf`,
image:        { type: 'jpeg', quality: 0.98 },
html2canvas:  { scale: 2 },
jsPDF:        { unit: 'in', format: 'a6', orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(box).save();

// Old monolithic-style usage:
html2pdf(box, opt);


}

//fontion du button GENERER
button_code_bar.addEventListener("click",() => {
if (text.value.length>0){
// conditions  0<mots<50
if(text.value.length<50){
  box.innerHTML= "<svg id='barcode'></svg>"
  JsBarcode("#barcode", text.value);
  pdf_box.innerHTML = "<button onclick='createPDF()'>Telecharger </button>"
}

//conditions pour mots>50
else{
    box.style.border = "0"
    h4.innerHTML= "Impossible de Generer le code barre"
    box.innerHTML = "<p class='error'><h1class='error'> Gar stp diminue le texte, c'est flooop!<h1></p>"
    pdf_box.style.display ="none"
    text.value = ""
}

//conditions mot=0
}else{
box.style.border = "0"
box.innerHTML = "<p class='error'> Rempli le champs, Mboutman !!</p>"
pdf_box.style.display ="none"
text.focus()
}
}
)


