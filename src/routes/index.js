import { Router } from 'express';
import { getTodo, getTodos, saveTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

const catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

router.get('/todos', catchErrors(getTodos));

router.get('/todo/:id', catchErrors(getTodo));

router.post('/todo', catchErrors(saveTodo));

router.put('/todo', catchErrors(updateTodo));

router.delete('/todo/:id', catchErrors(deleteTodo));

export default router;
