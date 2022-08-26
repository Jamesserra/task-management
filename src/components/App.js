import { useState, useEffect } from "react";
import { COLORS } from "../styles/colors";
import "../styles/App.css";
import StatusLine from "./StatusLine";

const App = () => {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    console.log("test");
  }, []);

  const addEmptyTask = (status) => {
    ////
  };

  const addTask = (task) => {
    ////
  };

  const deleteTask = (id) => {
    ////
  };

  const moveTask = (id, newStatus) => {
    ////
  };

  const saveTasksToLocalStorage = (tasks) => {
    ////
  };

  const loadTasksToLocalStorage = () => {
    ////
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      <main>
        <section>
          <StatusLine
            task={task}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
          />
          <StatusLine
            task={task}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          />
          <StatusLine
            task={task}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Done"
          />
        </section>
      </main>
    </div>
  );
};

export default App;
