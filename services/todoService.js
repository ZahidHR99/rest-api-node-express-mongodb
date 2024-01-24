// services/todoService.js
const Todo = require('../models/Todo');

class TodoService {
  async getAllTodos() {
    return await Todo.find();
  }

  async getTodoById(id) {
    return await Todo.findById(id);
  }

  async createTodo(data) {
    return await Todo.create(data);
  }

  async updateTodo(id, data) {
    return await Todo.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteTodo(id) {
    return await Todo.findByIdAndDelete(id);
  }
}

module.exports = new TodoService();
