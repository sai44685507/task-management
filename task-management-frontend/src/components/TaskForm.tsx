import React, { useState, useContext } from "react";
import { TaskContext, TaskCreate } from "../context/TaskContext"; // Updated import to use TaskCreate
import { createTask } from "../services/taskService";
import "../styles/TaskForm.css";
import RightIcon from "../assets/right.png"; // Import the right icon

interface TaskFormProps {
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onClose }) => {
  const context = useContext(TaskContext);
  const { addTask } = context ?? {}; // Accessing the context safely

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [taskCreated, setTaskCreated] = useState(false); // New state to track task creation status

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!addTask) {
      console.error("TaskContext is not available.");
      return;
    }

    // Prepare the new task object using TaskCreate interface
    const newTask: TaskCreate = {
      title,
      description,
      deadline,
      assignedTo,
      status: "To Do", // Default status
      priority: "Low", // Default priority
    };

    try {
      setLoading(true); // Start loading indicator

      // Send the new task to the backend (if you are using a backend service like createTask)
      const createdTask = await createTask(newTask);

      // Add the newly created task to the context
      if (createdTask) {
        addTask(createdTask); // Add the task to the context after creation
        setTaskCreated(true); // Update state to show success message
      } else {
        console.error("Failed to create task: No task data returned from the server.");
        alert("Task creation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error creating task:", error);
      alert("An error occurred while creating the task. Please try again.");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  const handleBack = () => {
    onClose(); // Close the modal or go back to the previous window
  };

  return (
    <div className="modal-background">
      {taskCreated ? (
        <div className="success-box">
          <img src={RightIcon} alt="Success Icon" className="success-icon" />
          <h3>New task has been created successfully!</h3>
          <button onClick={handleBack}>Back</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="task-form">
          <h2>Add Task</h2>

          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label>Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />

          <label>Assigned To</label>
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
          />

          <div className="button-container">
            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Task"}
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;
