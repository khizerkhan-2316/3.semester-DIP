// propagation.js
let h3 = document.querySelector("h3");

function propagation(event) {
    console.log(event.type);
    console.log(event.target.id);
    console.log(event.target);
    console.log(this);
    event.target.style.color = 'red';
    this.style.color = 'blue';
    //event.stopPropagation();
}

h3.onclick = propagation;
document.body.onclick = propagation;
