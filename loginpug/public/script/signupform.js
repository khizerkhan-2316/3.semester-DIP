const button = document.querySelector('button');

button.addEventListener('click', async (e) => {
  e.preventDefault();

  const details = document.querySelectorAll('input');

  const credentials = {
    username: details[0].value,
    password: details[1].value,
  };

  const body = JSON.stringify(credentials);

  const post = await fetch('/signup', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: body,
  });

  if (post.ok) {
    window.location.href = '/login';
  } else {
    alert('Bad request, try again');
  }
});
