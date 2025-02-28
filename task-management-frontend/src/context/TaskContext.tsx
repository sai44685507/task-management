import React, { createContext, useState, ReactNode, useContext } from "react";

// 1. Interface for creating a new task (no _id required)
export interface TaskCreate {
  title: string;
  description: string;
  status: 'To Do' | 'On Progress' | 'Done'; // Task status types
  priority: 'Low' | 'High'; // Priority levels
  deadline: string; // Deadline date as string
  assignedTo: string; // Person assigned to task
}

// 2. Interface for task with _id, used for update and delete operations
export interface Task extends TaskCreate {
  _id: string; // The _id field is required for update and delete
}

// Define the context type for the task operations
interface TaskContextType {
  tasks: Task[]; // Array to store all tasks
  addTask: (task: TaskCreate) => void; // Function to add a new task
  updateTask: (taskId: string, updatedTask: TaskCreate) => void; // Function to update a task
  deleteTask: (taskId: string) => void; // Function to delete a task
}

// Create a context with undefined as the default value
export const TaskContext = createContext<TaskContextType | undefined>(undefined);

// TaskProvider component that provides context values to its children
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]); // Initialize tasks state as an empty array

  // Function to add a new task to the list
  const addTask = (task: TaskCreate) => {
    const newTask = { ...task, _id: Date.now().toString() }; // Assuming _id is generated on creation
    setTasks((prevTasks) => [...prevTasks, newTask]); // Adds new task to the existing list
  };

  // Function to update an existing task
  const updateTask = (taskId: string, updatedTask: TaskCreate) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => task._id === taskId ? { ...task, ...updatedTask } : task)
    );
  };

  // Function to delete a task by its ID
  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId)); // Removes task by ID
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children} {/* Provides the context values to the child components */}
    </TaskContext.Provider>
  );
};

// Custom hook to access TaskContext in components
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context; // Returns the context values
};
