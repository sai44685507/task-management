import { Request, Response } from 'express';
import {
    createTaskInDB,
    getTasksFromDB,
    updateTaskInDB,
    deleteTaskFromDB,
} from '../services/taskService';

// Controller function to create a task
export const createTaskController = async (req: Request, res: Response) => {
    try {
        const newTask = await createTaskInDB(req.body);
        console.log("new task");
        res.status(201).json(newTask);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Controller function to get all tasks
export const getTasksController = async (req: Request, res: Response) => {
    try {
        const tasks = await getTasksFromDB();
        res.status(200).json(tasks);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Controller function to update a task
export const updateTaskController = async (req: Request, res: Response) => {
    try {
        const updatedTask = await updateTaskInDB(req.params.id, req.body);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Controller function to delete a task
export const deleteTaskController = async (req: Request, res: Response) => {
    try {
        const deletedTask = await deleteTaskFromDB(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};