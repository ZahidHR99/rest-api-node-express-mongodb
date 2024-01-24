// controllers/todoController.js
const todoService = require('../services/todoService');

class TodoController {
  async getAllTodos(req, res, next) {
    try {
      const todos = await todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  async getTodoById(req, res, next) {
    try {
      const { id } = req.params;
      const todo = await todoService.getTodoById(id);

      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }

      res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  async createTodo(req, res, next) {
    try {
      const data = req.body;
      const todo = await todoService.createTodo(data);
      res.status(201).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async updateTodo(req, res, next) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedTodo = await todoService.updateTodo(id, data);

      if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }

      res.json(updatedTodo);
    } catch (error) {
      next(error);
    }
  }

  async deleteTodo(req, res, next) {
    try {
      const { id } = req.params;
      const deletedTodo = await todoService.deleteTodo(id);

      if (!deletedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }

      res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TodoController();
