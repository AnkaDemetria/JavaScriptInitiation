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


// LES OPERATEURS MATHEMATIQUES: modulo (reste d une division)
var x = 32;
var y = 5;
var z = 2;

alert(
    x % y
)

y +=  z //  équivaut à y = y + z
alert (y) // Renvoi à 7
y *=  z //  équivaut à y = y * z
alert (y) // Renvoi à 14
y -=  z //  équivaut à y = y - z
alert (y) // Renvoi à 12
y /=  z //  équivaut à y = y / z
alert (y) // Renvoi à 6
y %=  z //  équivaut à y = y % Z
alert (y) // Renvoi à 0

// Exercice 1
// Avec 3 variables: var heure ouverture, var heure travail, var heure actuelle
// Créer une condition: si heure actu est avant h ouverture, alors alert "pas encore ouvert", si pendant h ouverture: "bienvenue", si apres h ouverture, "revenez demain"

var heureouverture= 9;
var heurefermeture= 17;
var heure= 16;

if(heure<heureouverture){
    alert("Pas encore ouvert")
}
else if(heure>=heureouverture && heure <= heurefermeture){
    alert("Bienvenue") 
}
else{
    alert("Revenez demain!")
}

// Exercice 2
// si j'arrive le matin, "nous sommes le matin", si j'arrive l'aprem: "nous sommes l'apres midi" en gardant les variables

if(heure<heureouverture){
    alert("Pas encore ouvert")
}
else if(heure>=heureouverture && heure <= heurefermeture){
    alert("Bienvenue")
    if(heure <= 12){
        alert("Nous sommes le matin")
    }
    else {
        alert("Nous sommes l'apres midi")
    }  
}
else{
    alert("Revenez demain!")
}

// CONDITION TERNAIRE possible sur une fonction if simple (soit ça soit ça)

// (heure < 12) ?
// alert('bienvenue nous sommes le matin')
//  :
// alert("bienvenue nous sommes l'apres-midi")
// } else {
// alert('revenez demain')
// }


// CONDITION SWITCH
var note = 5;

switch(note){
    case 5:
        alert("votre note est de 5")
        break;

        default:
            alert  ("nous ne connaissaons pas votre note")
            break;
}

// CONDITION AVEC IF ELSE IF ELSE
var note = 18.5;
var noteAmericaine = "";

if(note == 20){
noteAmericaine = "A+"
} else if (note>= 18 && note < 19){
    noteAmericaine = "A"
} else if (note>= 15 && note < 18){
    noteAmericaine = "B"
} else if (note>= 12 && note < 15){
    noteAmericaine = "C"
} else if (note>= 9 && note < 12){
    noteAmericaine = "D"
} else if (note>= 6 && note < 9){
    noteAmericaine = "E"
} else if (note<6){
    noteAmericaine = "F"
}else {
    noteAmericaine = "ABS"
}

alert(noteAmericaine)

switch (noteAmericaine) {
    case "A+":
        alert("Excellent travail")
        break;
    case "A":
        alert("Très bien")
        break;
    case "B":
        alert("Bien")
        break;
    case "C":
        alert("Correct")
        break;
    case "D":
        alert("Moyen")
        break;
    case "E":
        alert("Insuffisant")
        break;
    default:
            alert("nul")
            break;
}


    