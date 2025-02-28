// import { Task, ITask } from '../models/Task';  // Import Task and ITask interface

// // Service function to create a new task
// export const createTask = async (taskData: ITask): Promise<ITask> => {
//     try {
//         const task = new Task(taskData);
//         return await task.save();
//     } catch (error) {
//         console.error("Error creating task:", error);
//         throw new Error("Failed to create task");
//     }
// };

// // Service function to get all tasks
// export const getTasks = async (): Promise<ITask[]> => {
//     try {
//         return await Task.find();
//     } catch (error) {
//         console.error("Error fetching tasks:", error);
//         throw new Error("Failed to fetch tasks");
//     }
// };

// // Service function to update a task
// export const updateTask = async (taskId: string, taskData: ITask): Promise<ITask | null> => {
//     try {
//         const updatedTask = await Task.findByIdAndUpdate(taskId, taskData, { new: true });
//         if (!updatedTask) {
//             throw new Error("Task not found");
//         }
//         return updatedTask;
//     } catch (error) {
//         console.error("Error updating task:", error);
//         throw new Error("Failed to update task");
//     }
// };

// // Service function to delete a task
// export const deleteTask = async (taskId: string): Promise<ITask | null> => {
//     try {
//         const deletedTask = await Task.findByIdAndDelete(taskId);
//         if (!deletedTask) {
//             throw new Error("Task not found");
//         }
//         return deletedTask;
//     } catch (error) {
//         console.error("Error deleting task:", error);
//         throw new Error("Failed to delete task");
//     }
// };

import { Task, ITask } from '../models/Task';

// Service function to create a new task
export const createTaskInDB = async (taskData: ITask): Promise<ITask> => {
    try {
        const task = new Task(taskData);
        return await task.save();
    } catch (error) {
        console.error("Error creating task:", error);
        throw new Error("Failed to create task");
    }
};

// Service function to get all tasks
export const getTasksFromDB = async (): Promise<ITask[]> => {
    try {
        return await Task.find();
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw new Error("Failed to fetch tasks");
    }
};

// Service function to update a task
export const updateTaskInDB = async (taskId: string, taskData: ITask): Promise<ITask | null> => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, taskData, { new: true });
        if (!updatedTask) {
            throw new Error("Task not found");
        }
        return updatedTask;
    } catch (error) {
        console.error("Error updating task:", error);
        throw new Error("Failed to update task");
    }
};

// Service function to delete a task
export const deleteTaskFromDB = async (taskId: string): Promise<ITask | null> => {
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if (!deletedTask) {
            throw new Error("Task not found");
        }
        return deletedTask;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw new Error("Failed to delete task");
    }
};