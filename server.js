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
  //todoList.deleteVar = todoList.deleteVar.filter((obj) => obj.id !== req.params)
  new_json = JSON.stringify(toDolist, null, 2)
  res.json(new_json);
})

app.listen(port, () => {
});
