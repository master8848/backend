const express = require('express');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

const port = 80;

let posts = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol that is so funny!',
  },
  {
    id: uuid(),
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog',
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd',
  },
  {
    id: uuid(),
    username: 'onlysayswoof',
    comment: 'woof woof woof',
  },
];
const webPath = path.join(__dirname, './views/static');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.static(webPath));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => next());

app.get('/', (req, res) => {
  res.render('index', { posts });
});
app.get('/form', (req, res) => {
  res.render('form');
});
app.post('/new', (req, res) => {
  const { username, post } = req.body;
  posts.push({ username: username, post: post });
  console.log(posts);
  res.redirect('/');
});

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.listen(port, () => {
  console.log(`Listening to port : http://localhost:${port}`);
});
