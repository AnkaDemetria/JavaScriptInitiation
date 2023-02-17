// CREER 4 CONSTANTES PRENOM NOM AGE ET PHRASE
// const prenom="Sailor";
// const nom="Moon";
// const age=25;
// const phrase="Bonjour, je m'appelle  " +prenom+ " "  +nom +"  et j'ai " +age +" ans";
// alert(phrase);

// AFFICHER LA DATE DU JOUR
// var now=new Date();
// console.log(now);

// CREER UN TABLEAU 
// const monTableau = ["toto","tutu","tati"];
// monTableau.pop;
// console.table(monTableau);

// CREER UN TABLEAU ASSOCIATIF SANS EN FAIRE UN OBJET
// const tableau = [];
// tableau["papa"]="toto";
// tableau["maman"]="tati";
// tableau["enfant"]="titi";
// console.table(tableau);


// EXEMPLES DE TYPE DE VARIABLES READ ME
// var maChaine = new String ("exemple")
// var a= 42;
// var b= 4.2;
// var c=-42;
// var d="42";

// alert ("ma variable a est de type: " + typeof (a) + 
// "\nma variable b est de type: " + typeof (b) + 
// "\nma variable c est de type: " + typeof (c) + 
// "\nma variable d est de type : " + typeof (d));



// var machaine = "exemple";
// var machaine = new String("exemple");

// alert("ma variable machaine est de type : " + typeof(machaine) +
// "\nma variable machaine est de type : " + typeof (machaine));



// var n = null;
// var u = undefined;
// var nn = NaN;

// alert("ma variable n est de type : " + typeof(n) +
// "\nma variable u est de type : " + typeof (u) +
// "\nma variable nn est de type : " + typeof (nn));


// LES OPERATEURS MATHEMATIQUES: modulo (reste d une division)
// var x = 32;
// var y = 5;
// var z = 2;

// alert(
//     x % y
// )

// y +=  z //  équivaut à y = y + z
// alert (y) // Renvoi à 7
// y *=  z //  équivaut à y = y * z
// alert (y) // Renvoi à 14
// y -=  z //  équivaut à y = y - z
// alert (y) // Renvoi à 12
// y /=  z //  équivaut à y = y / z
// alert (y) // Renvoi à 6
// y %=  z //  équivaut à y = y % Z
// alert (y) // Renvoi à 0

// Exercice 1
// Avec 3 variables: var heure ouverture, var heure travail, var heure actuelle
// Créer une condition: si heure actu est avant h ouverture, alors alert "pas encore ouvert", si pendant h ouverture: "bienvenue", si apres h ouverture, "revenez demain"

// var heureouverture= 9;
// var heurefermeture= 17;
// var heure= 16;

// if(heure<heureouverture){
//     alert("Pas encore ouvert")
// }
// else if(heure>=heureouverture && heure <= heurefermeture){
//     alert("Bienvenue") 
// }
// else{
//     alert("Revenez demain!")
// }

// Exercice 2
// si j'arrive le matin, "nous sommes le matin", si j'arrive l'aprem: "nous sommes l'apres midi" en gardant les variables

// if(heure<heureouverture){
//     alert("Pas encore ouvert")
// }
// else if(heure>=heureouverture && heure <= heurefermeture){
//     alert("Bienvenue")
//     if(heure <= 12){
//         alert("Nous sommes le matin")
//     }
//     else {
//         alert("Nous sommes l'apres midi")
//     }  
// }
// else{
//     alert("Revenez demain!")
// }

// CONDITION TERNAIRE possible sur une fonction if simple (soit ça soit ça)

// (heure < 12) ?
// alert('bienvenue nous sommes le matin')
//  :
// alert("bienvenue nous sommes l'apres-midi")
// } else {
// alert('revenez demain')
// }


// CONDITION SWITCH
// var note = 5;

// switch(note){
//     case 5:
//         alert("votre note est de 5")
//         break;

//         default:
//             alert  ("nous ne connaissaons pas votre note")
//             break;
// }

// CONDITION AVEC IF ELSE IF ELSE
// var note = 18.5;
// var noteAmericaine = "";

// if(note == 20){
// noteAmericaine = "A+"
// } else if (note>= 18 && note < 19){
//     noteAmericaine = "A"
// } else if (note>= 15 && note < 18){
//     noteAmericaine = "B"
// } else if (note>= 12 && note < 15){
//     noteAmericaine = "C"
// } else if (note>= 9 && note < 12){
//     noteAmericaine = "D"
// } else if (note>= 6 && note < 9){
//     noteAmericaine = "E"
// } else if (note<6){
//     noteAmericaine = "F"
// }else {
//     noteAmericaine = "ABS"
// }

// alert(noteAmericaine)

// switch (noteAmericaine) {
//     case "A+":
//         alert("Excellent travail")
//         break;
//     case "A":
//         alert("Très bien")
//         break;
//     case "B":
//         alert("Bien")
//         break;
//     case "C":
//         alert("Correct")
//         break;
//     case "D":
//         alert("Moyen")
//         break;
//     case "E":
//         alert("Insuffisant")
//         break;
//     default:
//             alert("nul")
//             break;
// }

// Exercice SWITCH ... CASE
// Afficher la valeur d'une réduction déterminée par calcul. Ce calcul tiendra compte du montant introduit dans une fenetre pop up. Elle sera nulle tant que le montant de la facture n'atteint pas 1000 euros, de 5% si le montant est compris entre 1000 et 2500 et de  10% si la facture dépasse 2500.

// var facture= 1000;
// var reduction = 0;

// if(facture < 1000){
//     reduction = 0
// } else if (facture >= 1000 && facture < 2500){
//     reduction = 5
// }else {
//     reduction = 10
// }

// var total = facture - ((reduction/100)*facture);

// switch (reduction) {
//     case 0:
//         console.log("pas de reduction",facture);
//         break;

//     default:
//         console.log("total : ", total)
//         break;
// }

// LES TABLEAUX: 
// var ArrayNbr = [1, 2, 3];

// ArrayNbr.push(40);  
// VA AJOUTER la valeur indiquée à la fin du tableau
// ArrayNbr.pop(1, 2); 
// VA RETIRER la dernière valeur dans le tableau
// ArrayNbr.shift(1, 2); 
// [2, 3 ] retire la premiere valeur
// ArrayNbr.unshift(0);
// [0, 1, 2, 3] ajoute la valeur indiquée au début du tableau
// console.table(ArrayNbr)



// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayStr.concat("d"); 
// FUSIONNE DES TABLEAUX sans changer les valeurs du tablaeu initial
// console.table(ArrayCopy);



// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayStr.join("-"); 
// a-b-c joint les valeurs du tableau sans changer les valeurs du tablaeu initial
// ArrayStr.slice(1);
// ["b", "c"] va retirer le nombre d'elements indiquées du tableau en partant du début sans changer les valeurs du tableau initial
// console.table(ArrayStr);


// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayStr.slice(1);
// console.log(ArrayStr.slice(-1));
// ["c"]va afficher les valeurs en supprimant tout en partant de -1


// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayStr.includes("c");
// console.log(ArrayStr.includes("c"));
// renvoie à un booleen true or false


// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayStr.includes("c");
// ArrayStr.indexOf ("c");
// console.log(ArrayStr.indexOf ("c"));


// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayNbr.find(el => el > 4);
// console.log(ArrayNbr);
// RENVOIE LA VALEUR DU PREMIER ELEMENT TROUVE QUI RESPECTE LA condition "dans mon tableau, trouve un élément qui est sup à 2", => est un callback


// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayNbr.findIndex(el => el > 2);
// console.log(ArrayNbr.findIndex(el => el > 2));
// console.table(ArrayNbr)


// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayNbr.map(el => el * 2);
// console.log(ArrayNbr.map(el => el * 2));
// CREE UN NOUVEAU TABLEAU AVEC LES RESULTATS DE L APPEL D UNE FONCTION FOURNIE SUR CHAQUE ELEMENT DU TABLEAU APPELANT



// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayNbr.some(el => el > 5);
// console.log(ArrayNbr.some(el => el > 5));
// true PASSE LE TEST IMPLEMENTE PAR LA FONCTION FOURNIE RENVOIE A UN BOOLEEN INDIQUANT LE RESULTAT DU TEST


// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayNbr.filter(el => el > 1);
// console.log(ArrayNbr.filter(el => el > 1));
// [2, 3] RENVOIE TOUS LES ELEMENTS QUI RESPECTENT LA COND 



// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayNbr.every(el => el > 1);
// console.log(ArrayNbr.every(el => el > 1));



// var ArrayNbr = [1, 2, 3];
// var ArrayStr = ["a", "b", "c"];

// ArrayNbr.reverse();
// console.log(ArrayNbr.reverse);

// const div = document.getElementsByClassName("carre")

// console.log(div);

// div[0].style.backgroundColor = 'rgb(255, 0 ,0)';

// EXERCICE PRATIQUE SUR LES TABLEAUX
// Changer la couleur des div une sur deux

// Solution 1 plus simple
// div[0].style.backgroundColor = 'rgb(255 , 0 ,0)';
// div[1].style.backgroundColor = 'rgb(0 ,255 ,0)';
// div[2].style.backgroundColor = 'rgb(255 ,0 ,0)';
// div[3].style.backgroundColor = 'rgb(0 ,255 ,0)';
// div[4].style.backgroundColor = 'rgb(255 ,0 ,0)';

// solution 2 avec boucle for
// const div = document.getElementsByClassName("carre")

// for (let i=0; i <div.length;i++){

//     if(i%2 ==0){
//         div[i].style.backgroundColor = 'rgb(255, 0 ,0)';
//     }
//     else{
//         div[i].style.backgroundColor = 'rgb(0 ,255 ,0)';
//     }

// console.log(div[i]); 
// }

// Solution 3 avec map
// const div = document.getElementsByClassName("carre")
// const arrayDiv = Array.from(div)

// arrayDiv.map(element, index) => index % 2 !=0 ? console.log(element, index)

// div[i].style.backgroundColor = 'rgb(0 ,255 ,0)';

// solution 4 avec ternaire 
// const div = document.getElementsByClassName("carre");
// const arrayDiv = Array.from(div);

// div.map((element, index) => index % 2 !=0
// ? 
// element.style.background = 'rgb(0 ,255 ,0)' 
// :
//  'rgb(255 ,0 ,0)'
// )
//  ou AVEC BOUCLE FOR MAIS RETURN A LA PLACE DU ELSE
// div.map((element, index) => index % 2 != 0
//    ?
//   element.style.backgroundColor = 'rgb(255, 0, 0)'
//    :
//   element.style.backgroundColor = 'rgb(0, 255, 0)'
// )
// div.map((element, index) => {
//   if(index % 2 != 0){
//     return element.style.backgroundColor = 'rgb(255, 0, 0)'
//   }
//   return element.style.backgroundColor = 'rgb(0, 255, 0)'
// })

// EXERCICE getRandom
// étapes:
// 1 sélectionner le body
// 2 log ce que l'on a sélectionné
// 3 function random
// 4 appliquer
// 5 vérifier que la function marche en l appelant

// const body = document.getElementsByTagName("body");
// const btn = document.getElementsByClassName("btn")
// console.log(btn);


// function getRandomInt(){
//     return Math.floor(Math.random() * 256);
// }

// function bodyBg(){
//     body[0].style.background = 'rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')';
// }

// bodyBg()
