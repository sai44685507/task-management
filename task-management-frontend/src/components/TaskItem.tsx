//gemini

import React, { useState } from "react";
import { Task } from "../context/TaskContext";
import "../styles/TaskItem.css";

interface TaskItemProps {
  task: Task;
  onUpdate: (taskId: string, updatedTaskData: Partial<Task>) => Promise<Task>;
  onDelete: (taskId: string) => Promise<void>;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [editedDeadline, setEditedDeadline] = useState(task.deadline);

  const handleUpdate = async () => {
    if (task._id) {
      try {
        await onUpdate(task._id, {
          title: editedTitle,
          description: editedDescription,
          priority: editedPriority,
          deadline: editedDeadline,
        });
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating task:", error);
      }
    } else {
      console.error("Task ID is missing.");
    }
  };

  const handleDelete = () => {
    if (task._id) {
      onDelete(task._id);
    } else {
      console.error("Task ID is missing.");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedPriority(task.priority);
    setEditedDeadline(task.deadline);
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="edit-input"
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="edit-textarea"
        />
        <select
          value={editedPriority}
          onChange={(e) => setEditedPriority(e.target.value as "Low" | "High")}
          className="edit-select"
        >
          <option value="Low">Low</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          value={editedDeadline}
          onChange={(e) => setEditedDeadline(e.target.value)}
          className="edit-date"
        />
        <div className="task-actions">
          <button onClick={handleUpdate} className="task-button update-button">
            Save
          </button>
          <button onClick={handleCancelEdit} className="task-button cancel-button">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="task-item">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className={`task-priority ${task.priority === "High" ? "high-priority" : "low-priority"}`}>
        {task.priority} Priority
      </p>
      <p className="task-deadline">Deadline: {task.deadline}</p>
      <div className="task-actions">
        <button onClick={handleEditClick} className="task-button update-button">
          Update
        </button>
        <button onClick={handleDelete} className="task-button delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;