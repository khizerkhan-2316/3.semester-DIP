const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

// If you need to compile pug to HTML and see the output use: "pug -w ./views -o ./html -P"
// Which stands for pug watch views directory and output the HTML in the HTML directory with pretty print

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listning on Port: ${PORT}...`));
