const messages = require('../../data');

const getMessages = (req, res) => {
  res.status(200).json(messages);
};

const getMessage = (req, res) => {
  const { id } = req.params;

  const message = messages.find((message) => message.id === id);

  message
    ? res.status(200).send(message)
    : res.status(404).send('<h1>Ressource not found </h1>');
};

const createMessage = (req, res) => {
  const { message } = req.body;

  if (message) {
    const random = new String(Math.floor(Math.random() * 1000) + 1);
    messages.push({ message, id: random });
    return res.status(200).send('ok');
  }

  res.status(400).send('<h1>Bad request 400</h1>');
};

const updateMessage = (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  if (message) {
    const index = messages.findIndex((message) => message.id === id);

    if (index != -1) {
      messages[index] = { message, id };
      return res.status(304).send('Modified');
    }

    res.status(404).send('ressoruce not found');
  }

  res.statud(400).send('Bad request');
};

const deleteMessage = (req, res) => {
  try {
    const { id } = req.params;

    if (id != -1) {
      const index = messages.findIndex((message) => message.id === id);
      messages.splice(index, 1);
      res.status(200).send('Deleted');
    }
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage,
};
