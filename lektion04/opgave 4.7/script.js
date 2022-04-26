const form = document.querySelector('form');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: document.querySelector('input').value,
      body: document.querySelector('textarea').value,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
