// opgave 4.1

function colorChange(element, color) {
  Array.from(document.querySelectorAll(element)).forEach(
    (node) => (node.style.color = color)
  );
}

colorChange('p', 'red');

// opgave 4.2

Array.from(document.querySelectorAll('h1 + * + *')).forEach(
  (node) => (node.style.color = 'brown')
);

// opgave 4.3

Array.from(document.querySelectorAll('li:nth-child(odd')).forEach(
  (node) => (node.style.backgroundColor = 'lightgray')
);

//opgave 4.4

Array.from(document.querySelectorAll('h1 + *')).forEach((node) => {
  node.outerHTML = '<h3>' + node.innerHTML + '</h3>';
});

//opgave 4.5

let element = document.createElement('div');

document.body.insertBefore(element, document.querySelector('h1'));
element.style.display = 'flex';
element.style.flexDirection = 'column';

const headings = Array.from(document.querySelectorAll('h1, h3'));

let id = 0;

headings.forEach((heading) => {
  heading.id = 'id' + id;

  const link = document.createElement('a');

  link.href = '#' + heading.id;
  link.innerHTML = heading.innerHTML;

  element.appendChild(link);

  id++;
});
