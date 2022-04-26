const express = require('express');
const app = express();
const hbs = require('pug');
const session = require('express-session');
const tasks = [{ name: 'Programmering' }];

app.set('view engine', 'pug');
app.set('views', 'templates');

app.use(express.static('filer'));
app.use(express.json());
app.use(session({ secret: 'hemmelig', saveUninitialized: true, resave: true }));

app.get('/', function (request, response) {
  if (!session.textList) {
    session.textList = [{ text: 'text1' }];
  }
  response.render('index', { list: session.textList });
});

app.get('/opgaver', (req, res) => {
  if (!session.tasks) {
    session.tasks = tasks;
  }
  res.render('opgaver', {
    tasks: session.tasks,
    numberOfTasks: calculateNumberOfTasks(tasks),
  });
});

app.post('/opgaver', (req, res) => {
  const { name } = req.body;

  if (!session.tasks) {
    session.tasks = { name };
  } else {
    session.tasks.push({ name });

    console.log(session.tasks);
  }
  res.status(201).json({ success: true });
});

app.post('/', async function (request, response) {
  console.log('IN POST');
  const body = await request.body;
  if (!session.textList) {
    session.textList = [];
  }
  session.textList.push(body);
  response.end();
});

app.listen(8080);

console.log('Lytter på port 8080 ...');

const calculateNumberOfTasks = (tasks) => {
  let sum = 0;

  for (let i = 0; i < tasks.length; i++) {
    sum++;
  }

  return sum;
};
