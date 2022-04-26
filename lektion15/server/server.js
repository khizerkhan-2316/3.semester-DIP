const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`));
