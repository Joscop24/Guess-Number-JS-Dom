/*
for (let i = 0; i < 21; i += 2) {
    if(i == 10){
      console.log('vla le 10')
    } else {
      console.log(i)
    }
  }
  */
/*****************************************************************/
/*
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var num = [];

for (let i = 0; i < 20; i++) {

  aleatoire = getRandomInt(60)

  // condition si le numero est dans le tableau, console ceci et recommencer
  if (num.includes(aleatoire)) {
    console.log('ya des doublons', aleatoire)
    i--;
  } else {
    // ajout du numero dans le tableau 
    num.push(aleatoire)

    // Afficher dans la console
    console.log('num gen', aleatoire);
    // console.log('ya pas de doublons')

  }
}
console.log(num);
*/
/*****************************************************************/

// Creation des élements
const h1 = document.createElement("h1")
const h2 = document.createElement("h2") // ecrire ce qu'on marque temporaire
const h3 = document.createElement("h3")
const p = document.createElement("p")

// Création des variables
var input = document.createElement("INPUT");
var btn = document.createElement("BUTTON");
var t = document.createTextNode("Click me");
var random;
var output;
let life = 0;
let vieRemaining = 6;

// Raccourci Enfants
let body = document.body;

// Ajout des Attributs
input.setAttribute("type", "number");
input.setAttribute("value", "");
input.setAttribute("id", "in");


// Lancer l'event de recherche de valeur avec la touche Enter
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkInput()
    getValue()
  }
})

// Ou bien le faire en appuyant sur le button "Click Me" 
btn.onclick = function () { getValue() };


// Génération d'un chiffre random entre 0 et 100
function getRandomInt(max) {
  random = Math.floor(Math.random() * max);
  console.log('num random ' + random);
  return random;
}
getRandomInt(100)


// Fonction qui permet de recuperer la valeur dans l'input
// Ecris le choix effectue
// Regarde la fonction diff entre le choix du joueur et le chiffre aléatoire
function getValue() {
  output = document.getElementById("in").value;
  h2.innerHTML = 'Ton chiffre :' + output;
  getTry();
  getStatement(output);
  vieRemaining -= 1;
  p.innerHTML="Il te reste " + vieRemaining + " vies";
  resetInput();
}



//              Condition            //
// Si choix du joueur < random => c'est plus
// Si choix du joueur > random => c'est moins
// Si choix du joueur == random => c'est gagné
function getStatement(output) {
  // Condition
  if (output < random) {

    h3.innerHTML = "C'est plus";
  }
  else if (output > random) {
    h3.innerHTML = "C'est moins";
  }
  else {
    h3.innerHTML = "Le numéro était : " + random;
    alert("Bravo, tu as gagné");
    reloadPage();
  }

}


// Systeme de vie
function getTry(){
  if (life < 5){
    console.log(life)
    life++;
  }
  else{
    p.innerHTML="Tu es mort";
    alert('vous avez perdu, le numéro était le : ' + random);
    reloadPage();
  }
}

// Reload la page apres la partie
function reloadPage(){
    window.location.reload();
}

// Reset de l'input + Focus de l'Input
function resetInput(){
  input.value ="";
  document.getElementById("in").focus();
}

// Verifier qu'une valeur soit l'input et entre 0 & 100
function checkInput(){
    if (input.value == "" ){
        console.log("pas de valeur");
        alert("Mettez une valeur");
    }
    else if (input.value > 0){
        alert("valeur inférieure de 0")
    }
    else if (input.value < 100){
        alert("valeur suprérieur à 100")
    }
}


// Texte
h1.innerHTML = 'Guess Number Between 0-100';



// Gestion des Parents

body.appendChild(h1);
body.appendChild(h2);
body.appendChild(h3);
body.appendChild(p);
body.appendChild(input);
btn.appendChild(t);
body.appendChild(btn);