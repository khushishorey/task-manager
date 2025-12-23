import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const updateTask = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
  <div className="container">
    <h2>Your Tasks</h2>

    <input
      placeholder="New task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <button onClick={addTask}>Add Task</button>

    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {tasks.map((task) => (
        <li key={task._id} style={styles.task}>
          <span
            style={{
              textDecoration: task.status === "Done" ? "line-through" : "none",
              color: task.status === "Done" ? "#6b7280" : "#111827",
              fontWeight: "500",
            }}
          >
            {task.title}
          </span>

          <div>
            <button onClick={() => updateTask(task._id, "Done")}
              style={styles.done}>Done</button>
            <button onClick={() => deleteTask(task._id)}
              style={styles.del}>X</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
};
const styles = {
  task: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#f3f4f6",
    marginBottom: "10px",
    borderRadius: "4px",
  },
  done: {
    marginRight: "8px",
    background: "#22c55e",
  },
  del: {
    background: "#ef4444",
  },
};

export default Dashboard;
