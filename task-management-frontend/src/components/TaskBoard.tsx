import React, { useEffect, useState } from 'react';
import { fetchTasks, updateTask, deleteTask } from '../services/taskService';
import TaskItem from './TaskItem';
import '../styles/TaskBoard.css';
import { Task, TaskCreate } from '../context/TaskContext'; // Import Task interfaces

const TaskBoard = ({ searchQuery, filterStatus }: { searchQuery: string; filterStatus: string }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newPriority, setNewPriority] = useState<'Low' | 'High' | undefined>(undefined);

  const updateTaskStatus = (tasks: Task[]) => {
    const currentDate = new Date();
    return tasks.map((task) => {
      const taskDeadline = new Date(task.deadline);
      if (taskDeadline < currentDate) {
        task.status = 'To Do';
      } else if (task.status === 'On Progress') {
        task.status = 'On Progress';
      } else {
        task.status = 'To Do';
      }
      return task;
    });
  };

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const tasksData = await fetchTasks();
        if (Array.isArray(tasksData)) {
          setTasks(updateTaskStatus(tasksData));
        } else {
          console.error('Fetched data is not an array:', tasksData);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasksData();
  }, []);

  const filteredTasks = tasks.filter(
    (task) =>
      (task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === '' || task.status === filterStatus)
  );

  // const handleUpdateTask = async (taskId: string, updatedTaskData: Partial<Task>) => {
  //   try {
  //     const updatedTask = await updateTask(taskId, updatedTaskData);
  //     setTasks((prevTasks) => prevTasks.map((task) => (task._id === taskId ? updatedTask : task)));
  //   } catch (error) {
  //     console.error('Error updating task:', error);
  //   }
  // };
  const handleUpdateTask = async (taskId: string, updatedTaskData: Partial<Task>): Promise<Task> => {
    try {
      const updatedTask = await updateTask(taskId, updatedTaskData);
      setTasks((prevTasks) => prevTasks.map((task) => (task._id === taskId ? updatedTask : task)));
      return updatedTask; // ✅ Return the updated task to match expected type
    } catch (error) {
      console.error('Error updating task:', error);
      throw error; // ✅ Ensure a rejected promise is returned on error
    }
  };
  

  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEditingTask = (taskId: string, updatedTaskData: Partial<Task>) => {
    const taskToEdit = tasks.find(task => task._id === taskId); // Find the task by taskId
    if (taskToEdit) {
      setEditingTask(taskToEdit); // Set task to be edited
      setNewPriority(taskToEdit.priority); // Set the current priority when editing
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setNewPriority(undefined); // Reset priority
  };

  const saveEdit = async () => {
    if (editingTask && newPriority) {
      await handleUpdateTask(editingTask._id, { priority: newPriority });
      setEditingTask(null);
    }
  };

  const getTaskCount = (status: string) => {
    return filteredTasks.filter((task) => task.status === status).length;
  };

  // Set dynamic colors and border styles based on the status
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'To Do':
        return 'to-do';
      case 'On Progress':
        return 'on-progress';
      case 'Done':
        return 'done';
      default:
        return '';
    }
  };

  return (
    <div className="task-board">
      <div className="task-board-grid">
        {['To Do', 'On Progress', 'Done'].map((status) => (
          <div key={status} className={`task-column ${getStatusClass(status)}`}>
            <div className="task-column-header">
              <div className="status-circle"></div>
              <h2>{status}</h2>
              <div className="task-count-board">{getTaskCount(status)}</div>
            </div>
            {filteredTasks.filter((task) => task.status === status).length > 0 ? (
              filteredTasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <TaskItem
                  key={task._id}
                  task={task}
                  onUpdate={handleUpdateTask} // Directly call the async update function
                  onDelete={handleDeleteTask}
                />
                ))
            ) : (
              <p className="task-empty-message">No tasks in this category.</p>
            )}
          </div>
        ))}
      </div>
      
      {/* Edit Task Form (only visible when editing a task) */}
      {editingTask && (
        <div className="task-edit-form">
          <h3>Edit Task</h3>
          <div>
            <label>Priority</label>
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value as 'Low' | 'High')}
            >
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
          </div>
          <button className="save-btn" onClick={saveEdit}>Save</button>
          <button className="cancel-btn" onClick={cancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TaskBoard;

