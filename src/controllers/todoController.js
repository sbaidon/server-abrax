import mongoose from 'mongoose';

const Todo = mongoose.model('Todo');

export const getTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  res.status(200);
  return res.json(todo);
};

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200);
  return res.json(todos);
};

export const saveTodo = async (req, res) => {
  const startingStatus = 'proceso';
  const { todo } = req.body;
  todo.remainingTime = todo.time;
  todo.status = startingStatus;
  const newTodo = await new Todo({ ...todo }).save();
  res.status(201);
  return res.json(newTodo);
};

export const updateTodo = async (req, res, next) => {
  const { todo } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(todo._id, { $set: todo }, { new: true });
  res.status(200);
  return res.json(updatedTodo);
};

export const deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  const removed = await Todo.remove({ _id: id });
  res.status(200);
  return res.json(removed);
};
