const headingContainer = document.querySelector('.heading');
const input = document.querySelector('input');
const logOnButton = document.querySelector('button');
const contentContainer = document.querySelector('.content-container');

async function getUsers() {
  const promise = await fetch('https://jsonplaceholder.typicode.com/users');

  if (promise.ok) {
    return promise.json();
  } else {
    throw new Error('FEJL!');
  }
}

const data = Promise.resolve(getUsers());

const createCard = (data) => {
  createElement('h2', 'Welcome, ' + data.name, headingContainer);
  const userContainer = document.createElement('div');
  userContainer.classList.add('user-container');
  createElement('p', 'Id: ' + data.id, userContainer);
  createElement('p', 'Username: ' + data.username, userContainer);
  createElement('p', 'Email: ' + data.email, userContainer);
  createElement('p', 'Phone: ' + data.phone, userContainer);
  createElement('p', 'Company: ' + data.company.catchPhrase, userContainer);
  createElement('p', 'Website: ' + data.website, userContainer);
  createElement(
    'p',
    'Address: ' + data.address.street + ', ' + data.address.city,
    userContainer
  );

  contentContainer.appendChild(userContainer);
};

const createElement = (element, value, appendContainer) => {
  const elementCreated = document.createElement(element);

  elementCreated.innerHTML = value;

  appendContainer.appendChild(elementCreated);
};

logOnButton.addEventListener('click', () => {
  const userId = input.value;
  const container = document.querySelector('.user-container');
  const heading = document.querySelector('.heading');
  if (container !== null && heading !== null) {
    container.remove();
    heading.removeChild(document.querySelector('h2'));
  }

  if (userId > 0 && userId <= 10) {
    const user = data.then((users) =>
      users.filter((user) => user.id == userId)
    );
    user.then((user) => createCard(user[0]));
  } else {
    alert('FEJL I INDTASTNING');
  }
});
