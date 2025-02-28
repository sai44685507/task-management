import { Router } from 'express';
import { createTaskController, getTasksController, updateTaskController, deleteTaskController } from '../controllers/taskController';

const router = Router();

// Route to create a task
router.post('/', createTaskController);

// Route to get all tasks
router.get('/', getTasksController);

// Route to update a task
router.put('/:id', async (req, res, next) => {
    try {
        await updateTaskController(req, res);
    } catch (error) {
        next(error);
    }
});

// Route to delete a task
router.delete('/:id', async (req, res, next) => {
    try {
        await deleteTaskController(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;
