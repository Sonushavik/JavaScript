// let h2= document.querySelector("h2");
// h2.innerText=h2.innerText + ". How are you!"


let divs=document.querySelectorAll(".box");
console.log(divs);


// divs[0].innerText = "div 1 hai ye";
// divs[1].innerText = "div 2 hai ye";
// divs[3].innerText = "div 2 hai ye";

// let indx=1;
// for(div of divs){
//     div.innerText = `div ${indx} hai ye`;
//     indx++;
// }

// let newBtn  = document.createElement("button");
// console.log(newBtn);
// newBtn.innerText="click me"

// let mainDiv = document.querySelector(".mainBox");
// mainDiv.prepend(newBtn)

// let h2=document.querySelector("h2");
// h2.innerHTML = "<i>Hello Sonu . How are you!</i>"

let newBtn = document.createElement("button");
console.log(newBtn)
newBtn.innerText = "Click here";
newBtn.style.backgroundColor = 'green'
newBtn.style.color = 'white'

document.querySelector("body").append(newBtn)


let para = document.querySelector("p");
para.classList
para.classList.add("newClass");
para.getAttribute();