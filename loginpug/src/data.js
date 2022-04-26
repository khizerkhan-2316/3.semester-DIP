const users = [];

const findUser = (username, password) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return true;
    }
  }

  return false;
};

export { findUser, users };
