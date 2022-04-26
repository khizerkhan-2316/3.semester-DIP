console.log('Up and running');

const container = document.querySelector('.container');

const commentMainContainer = document.querySelector('.comment-container');

const createUserCard = (user) => {
  const { id, userName, email, firstName, lastName } = user;
  const userContainer = document.createElement('div');
  userContainer.className = 'userContainer';

  const idHeading = createElement('h2', 'Id: ' + id, 'headingiD');

  const userNameHeading = createElement(
    'h2',
    'Username: ' + userName,
    'heading'
  );

  const emailHeading = createElement('h2', 'Email: ' + email, 'heading');

  const firstNameHeading = createElement(
    'h2',
    'First Name: ' + firstName,
    'heading'
  );

  const lastNameHeading = createElement(
    'h2',
    'Last Name: ' + lastName,
    'heading'
  );

  userContainer.appendChild(idHeading);
  userContainer.appendChild(userNameHeading);
  userContainer.appendChild(emailHeading);

  userContainer.appendChild(firstNameHeading);
  userContainer.appendChild(lastNameHeading);

  container.appendChild(userContainer);
};

const createElement = (type, value, className) => {
  const element = document.createElement(type);
  element.innerHTML = value;
  element.className = className;

  return element;
};

const getUsers = async () => {
  const response = await fetch(
    'https://shielded-stream-43048.herokuapp.com/users'
  );

  const body = response.ok ? await response.json() : response.status;

  body.forEach((user) => {
    createUserCard(user);
  });

  return response;
};

const getPostsFromUser = async (userId, beforeDate, afterDate) => {
  const response = await fetch(
    `https://shielded-stream-43048.herokuapp.com/chat-items?userId=${userId}&after=${afterDate}&before=${beforeDate}`
  );

  const body = await response.json();

  return body;
};

const getAllPosts = async () => {
  const response = await fetch(
    'https://shielded-stream-43048.herokuapp.com/users'
  );
  const users = await response.json();

  const posts = [];

  users.forEach((user) => {
    posts.push(
      getPostsFromUser(user.id, '2022-03-26,00:00:00', '2022-03-22,00:00:00')
    );
  });

  return posts;
};

const createUserPost = () => {
  const posts = getAllPosts();

  posts.then((array) => {
    Promise.all(array).then((values) => extract(values));
  });

  const extract = (array) => {
    array.forEach((post) => {
      post.forEach((post) => {
        const { userId, header, message } = post;
        userPost(userId, header, message);
      });
    });
  };

  const userPost = (userId, header, message) => {
    const subContainer = document.createElement('div');
    subContainer.className = 'comment-sub-container';

    const userIdHeading = createElement('h2', 'User id: ' + userId, 'heading');
    const headerHeading = createElement('h2', 'Header: ' + header, 'heading');
    const messageHeading = createElement(
      'h2',
      'Message: ' + message,
      'heading'
    );

    subContainer.appendChild(userIdHeading);
    subContainer.appendChild(headerHeading);
    subContainer.appendChild(messageHeading);

    commentMainContainer.appendChild(subContainer);
  };
};
document.addEventListener('DOMContentLoaded', getUsers(), createUserPost());
/*

setInterval(() => {
  console.log('ran');
  getUsers();
  createUserPost();
}, 1000 * 120);  */
