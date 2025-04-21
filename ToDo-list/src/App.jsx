import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const newTask = prompt("Update your task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask.trim();
      setTasks(updatedTasks);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: "purple" }}>My To-Do List</h2>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button style={styles.addBtn} onClick={addTask}>Add</button>
      </div>

      {tasks.map((task, index) => (
        <div key={index} style={styles.task}>
          <span>{task}</span>
          <div>
            <button style={styles.editBtn} onClick={() => editTask(index)}>Edit</button>
            <button style={styles.deleteBtn} onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  
  container: {
    maxWidth: "400px",
    width: "100%",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px #ccc",
    fontFamily: "Arial, sans-serif",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  h2:{
    color :"pink",
  },
  
  inputRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
   
  },
  addBtn: {
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f9f9f9",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    color: "blue",
  },
  editBtn: {
    background: "#ffa500",
    color: "white",
    border: "none",
    padding: "5px 10px",
    marginRight: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;

