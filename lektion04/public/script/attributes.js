//attributes.js
let lis = document.querySelectorAll('li');
let id = 1;
for (let li of lis) {
    li.className = id % 2 === 0 ? 'even' : 'odd';
    li.id = 'id' + id++;
}

setTimeout(update, 2000)

function update() {
    document.querySelector('#id3').style.color = 'red';
    let li = document.querySelector('.even');
    li.style.textDecorationLine = 'underline';
}
