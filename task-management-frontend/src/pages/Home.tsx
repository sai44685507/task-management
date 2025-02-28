
// updated at last 


import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TaskBoard from "../components/TaskBoard";
import TaskForm from "../components/TaskForm";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";  // Import home.css for additional styles

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Open the Task Form modal
  const openTaskForm = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="home-container">
      {/* Navbar at the top */}
      <Navbar onSearch={setSearchQuery} onFilter={setFilterStatus} />

      <div className="main-section">
        {/* Sidebar on the left side (Task Statistics) */}
        <Sidebar className="sidebar">
          <div className="add-task-btn">
            <button onClick={openTaskForm}>Add Task</button>
          </div>
        </Sidebar>

        {/* Main Content (Task Management) */}
        <div className="main-content">

          {/* Task Board */}
          <TaskBoard searchQuery={searchQuery} filterStatus={filterStatus} />
        </div>
      </div>

      {/* Task Form Modal */}
      {isModalOpen && <TaskForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Home;
