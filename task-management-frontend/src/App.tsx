
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<TaskForm onClose={() => window.history.back()} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

