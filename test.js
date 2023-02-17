const body = document.getElementsByTagName('body');
const btn = document.getElementsByClassName('btn');
console.log(btn);

function getRandomInt(){ 
    console.log(Math.floor(Math.random()* 256));
    return Math.floor(Math.random() * 256);
  
}

function getBodyBg(){
    body[0].style.background = 'rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')';
}

btn[0].addEventListener('click', getBodyBg);

const img = document.getElementById("img");
// const img = document.querySelector("#img")
console.log(img);
img.setAttribute("src","img/téléchargement.png")

const test = document.getElementsByClassName("test");
console.log(test);

// const test = document.getElementById('test');
console.log(test);
// for (let index = 0; index < test.length; index++) {
//     console.log(test[i].getAttribute("id"));
// }
function logger() {
    console.log(this.getAttribute("id"));
}
for (let index = 0; index < test.length; index++) {
    test[index].addEventListener('click', logger);
}

// AUTRE façon pour que la console affiche l id quand je clique sur la div
// const test = document.getElementsByClassName("test");

// console.log(test);
// for (let index = 0; index < test.length; index++) {
//     console.log(test[i].getAttribute("id"));
// }

// Array.from(test).forEach(element =>{
//     element.addEventListener("click",
//     function (e){
//         log(e.currentTarget.id)
//     })
// });

