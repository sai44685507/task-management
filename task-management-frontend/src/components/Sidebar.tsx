import React from "react";
import "../styles/Sidebar.css";

// Importing icons from assets folder
import expiredIcon from "../assets/Expired.jpg";
import activeIcon from "../assets/active.jpg";
import completedIcon from "../assets/completed.jpg";

const Sidebar: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="task-statistics-container">
        {/* Expired Tasks */}
        <div className="task-statistics-box">
          <div className="task-icon">
            <img src={expiredIcon} alt="Expired Tasks Icon" />
          </div>
          <div className="task-text">
            <h4>Expired Tasks</h4>
            <div className="task-count">
              <span className="count">0</span>
            </div>
          </div>
        </div>

        {/* Active Tasks */}
        <div className="task-statistics-box">
          <div className="task-icon">
            <img src={activeIcon} alt="Active Tasks Icon" />
          </div>
          <div className="task-text">
            <h4>All Active Tasks</h4>
            <div className="task-count">
              <span className="count">0</span>
            </div>
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="task-statistics-box">
          <div className="task-icon">
            <img src={completedIcon} alt="Completed Tasks Icon" />
          </div>
          <div className="task-text">
            <h4>Completed Tasks</h4>
            <div className="task-count">
              <span className="count">0</span>/<span className="total">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add the task button section */}
      <div className="add-task-btn">
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
