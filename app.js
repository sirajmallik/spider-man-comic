/*
let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`value of image no.${i} is changed`);
}
*/

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("p"));

let heading=document.querySelector('h1');
heading.style.color="green";
heading.style.backgroundColor="red";

let links=document.querySelectorAll('.box a');
for(let i=0; i<links.length; i++)
{
    links[i].style.color="#e07b39"; // inline css me hi change hoga

}

// manipulating using classist..

let img=document.querySelector('img');
img.classList;







