# task-management
# Task Management System

## 📌 Project Overview
The **Task Management System** is a web application designed to help users efficiently manage their tasks. It provides a **Kanban board** for task visualization, task details, a calendar for deadlines, and a sidebar for task statistics. The application is built with **React (Frontend) and Node.js/Express (Backend)**, with MongoDB for data storage.

---

## 📂 Folder Structure
```
task-management/
│── task-management-backend/   # Backend code
│── task-management-frontend/  # Frontend code
│── .gitignore
│── README.md
```

### 📌 Frontend Structure (`task-management-frontend/`)
```
│── src/
│   ├── assets/            # Static assets (images, icons, etc.)
│   ├── components/        # Reusable UI components
│   │   ├── TaskBoard.tsx  # Kanban board
│   │   ├── TaskItem.tsx   # Single task UI
│   │   ├── TaskForm.tsx   # Add/Edit Task Form
│   │   ├── Sidebar.tsx    # Task Stats Sidebar
│   │   ├── Calendar.tsx   # Deadline Picker
│   │   ├── Modal.tsx      # Success/Error messages
│   ├── pages/             # Pages for routing
│   │   ├── Home.tsx       # Home page (Kanban Board)
│   │   ├── TaskDetails.tsx # Task details page
│   ├── context/           # Context API for state management
│   ├── services/          # API requests using Axios
│   ├── styles/            # CSS stylesheets
│   ├── App.tsx            # Main application entry
│   ├── main.tsx           # React entry point
│── .env                   # Environment variables
│── package.json           # Dependencies & scripts
│── tsconfig.json          # TypeScript configuration
```

### 📌 Backend Structure (`task-management-backend/`)
```
│── src/
│   ├── models/             # Mongoose models
│   ├── routes/             # API endpoints
│   ├── controllers/        # Business logic for routes
│   ├── middleware/         # Middleware (auth, error handling, etc.)
│   ├── config/             # Database connection & environment config
│   ├── server.js           # Express app entry point
│── .env                    # Environment variables
│── package.json            # Dependencies & scripts
```

---

## 🚀 Technologies Used

### **Frontend (React + TypeScript)**
- React.js
- TypeScript
- Axios (API requests)
- React Router (Navigation)
- Context API (State management)
- CSS (For styling)

### **Backend (Node.js + Express + MongoDB)**
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (Environment variable management)
- CORS (Cross-Origin Resource Sharing)

---

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/task-management.git
cd task-management
```

### **2️⃣ Backend Setup**
```bash
cd task-management-backend
npm install  # Install dependencies
npm start    # Start the backend server
```
- **Environment Variables (`.env`)**
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=5000
  ```

### **3️⃣ Frontend Setup**
```bash
cd ../task-management-frontend
npm install  # Install dependencies
npm run dev  # Start the frontend
```
- **Environment Variables (`.env`)**
  ```
  VITE_API_BASE_URL=http://localhost:5000
  ```

---

## 📌 API Endpoints (Backend)
| Method | Endpoint        | Description |
|--------|---------------|-------------|
| GET    | `/tasks`       | Fetch all tasks |
| POST   | `/tasks`       | Create a new task |
| GET    | `/tasks/:id`   | Fetch a specific task |
| PUT    | `/tasks/:id`   | Update a task |
| DELETE | `/tasks/:id`   | Delete a task |

---

## 🔗 Deployment Guide

### **1️⃣ Deploy Backend (Railway, Render, or Vercel)**
- Push backend to GitHub and deploy it on **Railway.app** or **Render.com**.

### **2️⃣ Deploy Frontend (Vercel or Netlify)**
- Push frontend to GitHub and deploy using **Vercel** or **Netlify**.

### **3️⃣ Update Frontend `.env`**
- Set `VITE_API_BASE_URL` to the deployed backend URL.

---

## 📌 Features
✔️ **Kanban Board for task management**  
✔️ **Task CRUD operations** (Create, Read, Update, Delete)  
✔️ **Deadline calendar integration**  
✔️ **Task status tracking** (To-Do, In Progress, Done)  
✔️ **API integration with backend**  

---

🚀 Happy Coding! 🎯

