/* ON SELECTION  l'element qui a class="spoiler"
 ON STOCKE son contenu texte
 ON MASKE  le texte dedans 
    ON CRÉ UN element pourtant la classe .spoiler-content
    ON CRÉ un bUTTON qui affiche le spoiler 
*/


//crée un button avec le contenu Afficher le spoiler et 
//l'ajoute au DOM 
var createButton = function(element) {
  //on cré le button spoiler
  var button = document.createElement("button");
  button.className = "spoiler-button";
  button.textContent = "Afficher le spoiler";
  //on ajoute le button avant element

  element.parentElement.insertBefore(button, element);
  //on cache le span mais elle reste encore EXISTE au DOM 
  hideElement(element)
};


//cache un element 
var hideElement=function (element){
  element.style.display="none"
}


//on ajoute l'ecouteur chargement de document
document.addEventListener("DOMContentLoaded", function() {
  //on selectionnes tt span ont la class=.spoiler
  var spoilers = document.querySelectorAll(".spoiler");
  for (var i = 0; i < spoilers.length; i++) {
    createButton(spoilers[i]);
  }

});




var btns= document.querySelectorAll("button .spoiler-button")
debugger
for(var i=0;i<btns.length;i++){

 btns[i].addEventListener("click",function(){
//   console("click")
console(btns[i])

 })

}

