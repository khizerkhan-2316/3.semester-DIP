const express = require('express');
const homeRouther = require('./routes/home');
const messagesRouter = require('./routes/messages');

const app = express();

app.use(express.json());
app.use(homeRouther);
app.use('/messages', messagesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listining on port: ${PORT}...`));
