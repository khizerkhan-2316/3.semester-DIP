/*
let users = [];

const maincontainer = document.querySelector('div');

async function getUsers() {
  try {
    const fetchUsers = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    if (fetchUsers.ok) {
      const data = await fetchUsers.json();
      users = [...data];
      return users;
    }
  } catch (e) {
    return e;
  }
}

async function getUser(id) {
  try {
    const fetchUsers = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    if (fetchUsers.ok) {
      const data = await fetchUsers.json();
      return data;
    }
  } catch (e) {
    return e;
  }

  return users[id - 1];
}

const displayAllUsers = () => {
  getUsers().then((data) => {
    data.forEach((user, index) => {
      const div = document.createElement('div');
      div.classList.add('user-container');
      maincontainer.appendChild(div);
      createUserCard(user, index);
    });
  });
};

const createUserCard = (user, index) => {
  const userContainer = document.querySelectorAll('.user-container')[index];
  const name = createElement('h3', user.name);
  const username = createElement('p', 'Username: ' + user.username);
  const website = createElement('p', 'Website: ' + user.website);

  const addressValue =
    'Address: ' + user.address.street + ', ' + user.address.city;
  const address = createElement('p', addressValue);
  userContainer.appendChild(name);
  userContainer.appendChild(address);
  userContainer.appendChild(username);
  userContainer.appendChild(website);
};

const createElement = (elementName, value) => {
  const element = document.createElement(elementName);

  element.innerHTML = value;
  element.style.margin = '10px 0px 0px 10px';
  element.style.width = '100%';

  return element;
};

displayAllUsers();
  */
// uden async, får man ikke resultatet i tide.
const button = document.querySelectorAll('button')[0];

function getUsers() {
  try {
    const promise = fetch('https://jsonplaceholder.typicode.com/users');

    console.log(promise);
    const data = promise.json();

    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}

button.addEventListener('click', getUsers);
