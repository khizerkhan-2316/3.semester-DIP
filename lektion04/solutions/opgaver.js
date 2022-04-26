// Tilføj kode for opgave 4.1 - 4.5 her!

// opgave 4.1
for (let e of document.querySelectorAll('p'))
    e.className = 'red';

// opgave 4.2
for (let e of document.querySelectorAll('h1 + * + *')) {
    e.style.color = 'brown';
}

// opgave 4.3
for (let even of lis = document.querySelectorAll('li:nth-child(odd)')) {
    even.style.backgroundColor = 'lightgrey';
}

// opgave 4.4
for (let e of Array.from(document.querySelectorAll('h1 + p'))) {
    e.outerHTML = '<h2>' + e.innerHTML + '</h2>'
}

// opgave 4.5
document.body.innerHTML = '<div id="indhold">Indhold:<br></div>'
    + document.body.innerHTML;
let indhold = document.querySelector('#indhold');
let id = 1;
for (let h of document.querySelectorAll('h1, h2')){
    h.id = 'id' + id;
    indhold.innerHTML += '<a href="#id' + id++ + '">' + h.innerHTML + '</a><br>';
};
