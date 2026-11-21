const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todos');

const Todo = mongoose.model('Todo', new mongoose.Schema({
  title: String,
  done: { type: Boolean, default: false },
}));

app.get('/todo', async (req, res) => {
  res.json(await Todo.find());
});

app.post('/todo', async (req, res) => {
  res.status(201).json(await Todo.create(req.body));
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
