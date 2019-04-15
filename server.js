const express = require('express');
var todoList = require('./todoList.json')
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
console.log('todo list RESTful API server started on: ' + port);

app.get('/add', function (req, res) {
  const add = {
    "id": (req.query.id),
    "desc": (req.query.desc),
  }
  res.json(req.query);
  todoList.push(add);
})

app.delete('/delete', function (req, res) {
  const deleteVar = {
    "id": (req.query.id),
    "desc": (req.query.desc),
  }
  const new_file = todoList.filter((obj) => obj.id !== req.params);
  const idx = todoList.findIndex(({ id }) => id == 1);
  todoList.splice(idx, 1); JSON.stringify(todoList, null, 2);
  res.json(todoList);

})

app.listen(port, () => {
});
