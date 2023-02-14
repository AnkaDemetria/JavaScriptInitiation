// CREER 4 CONSTANTES PRENOM NOM AGE ET PHRASE
const prenom="Sailor";
const nom="Moon";
const age=25;
const phrase="Bonjour, je m'appelle  " +prenom+ " "  +nom +"  et j'ai " +age +" ans";
// alert(phrase);

// AFFICHER LA DATE DU JOUR
var now=new Date();
console.log(now);

// CREER UN TABLEAU 
// const monTableau = ["toto","tutu","tati"];
// monTableau.pop;
// console.table(monTableau);

// CREER UN TABLEAU ASSOCIATIF SANS EN FAIRE UN OBJET
const tableau = [];
tableau["papa"]="toto";
tableau["maman"]="tati";
tableau["enfant"]="titi";
console.table(tableau);


// EXEMPLES DE TYPE DE VARIABLES READ ME
var maChaine = new String ("exemple")
var a= 42;
var b= 4.2;
var c=-42;
var d="42";

alert ("ma variable a est de type: " + typeof (a) + 
"\nma variable b est de type: " + typeof (b) + 
"\nma variable c est de type: " + typeof (c) + 
"\nma variable d est de type : " + typeof (d));



var machaine = "exemple";
var machaine = new String("exemple");

alert("ma variable machaine est de type : " + typeof(machaine) +
"\nma variable machaine est de type : " + typeof (machaine));



var n = null;
var u = undefined;
var nn = NaN;

alert("ma variable n est de type : " + typeof(n) +
"\nma variable u est de type : " + typeof (u) +
"\nma variable nn est de type : " + typeof (nn));