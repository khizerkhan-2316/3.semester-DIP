console.log('Up and running');

const id = document.getElementById('userId');
const header = document.getElementById('header');
const text = document.getElementById('text');
const container = document.querySelector('.container');
const submit = document.querySelector('button');

async function sendUserPosts(e) {
  e.preventDefault();

  const userId = id.value;
  const heading = header.value;
  const inputText = text.value;
  const body = JSON.stringify({ header: heading, text: inputText });

  try {
    const responsePost = await fetch(
      `https://shielded-stream-43048.herokuapp.com/chat-items/${userId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        method: 'POST',
        body: body,
      }
    );

    const json = await responsePost.json();

    container.appendChild(createParagraph(json));
  } catch (e) {
    alert(e);
  }
}

submit.addEventListener('click', (event) => {
  sendUserPosts(event);
});

const createParagraph = (value) => {
  console.log(value);

  const { userId, userName, header, message, createTime } = value;
  const p = document.createElement('p');
  p.innerHTML = [userId, userName, header, message, createTime];

  return p;
};
