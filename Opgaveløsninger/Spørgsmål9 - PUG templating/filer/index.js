const inputField = document.querySelector('input');

function getData() {
  const value = document.querySelector('#newText').value;
  if (!value) {
    throw new Error('empty text');
  } else {
    return { text: value };
  }
}

const validateInput = () => {
  if (
    inputField.value === undefined ||
    inputField.value === null ||
    inputField.value === ''
  ) {
    return false;
  }

  return true;
};
const addPost = async () => {
  if (!validateInput()) {
    alert('Couldnt add post');
    return;
  }
  const newPost = inputField.value;
  await post({ name: newPost });
};
document.querySelector('button').onclick = async () => {
  try {
    await addPost();
    window.location = window.location.href;
  } catch (e) {
    alert(e);
  }
};

/*
document.querySelector('#push').onclick = () => {
  try {
    console.log('PUSH');
    post(getData()).catch((error) => setError(error));
    window.location.href = 'http://localhost:8080/';
  } catch (error) {
    setError(error);
  }
}; 
 */

/*
document.querySelector('#newText').onfocus = () => {
  console.log('ONFOCUS');
  removeError();
};

function setError(error) {
  document.querySelector('#error').textContent = error;
}

function removeError() {
  document.querySelector('#error').textContent = '';
} 

*/

async function post(data) {
  const response = await fetch('http://localhost:8080/opgaver', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('post failed');
  }
}
