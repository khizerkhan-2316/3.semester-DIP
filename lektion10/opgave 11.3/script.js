// one way of doing it:

/*
const paragrafs = document.querySelectorAll('p');

async function getUsers() {
  const promise = await fetch('https://jsonplaceholder.typicode.com/users');

  if (promise.ok) {
    return await promise.json();
  } else {
    throw new Error(promise.error);
  }
}

async function getPosts(id) {
  const promise = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (promise.ok) {
    return await promise.json();
  } else {
    throw new Error(promise.error);
  }
}

const users = getUsers();
const posts = getPosts(3);

Promise.all([users, posts])
  .then((values) => {
    const users = values[0];
    const posts = values[1];

    console.log(values);

    paragrafs[0].innerHTML = 'Name: ' + users[2].name;
    paragrafs[1].innerHTML =
      'Title on third post from user 3: ' + posts[2].title;
  })
  .catch((e) => console.log(e));
 */

// second way of doing it:

async function getPosts(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  const promise = new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response.json());
    } else {
      reject('error');
    }
  });
  return promise;
}

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const promise = new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response.json());
    } else {
      reject('Error');
    }
  });

  return promise;
}

Promise.all([getUsers(), getPosts(3)]).then((data) => console.log(data));
