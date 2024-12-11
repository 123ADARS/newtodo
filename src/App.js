
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const newTaskText = prompt("Edit Task:", tasks.find((task) => task.id === id)?.text);
    if (newTaskText) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newTaskText } : task
        )
      );
    }
  };

  return (
    <div className="app">
      <h1 className="a">Todo List</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
