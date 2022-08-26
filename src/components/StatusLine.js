import React from "react";
import Task from "./Task";
import "../styles/statusLine.css";

const StatusLine = (props) => {
  const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask } = props;

  let taskList, tasksForStatus;

  const handleEmpty = () => {
    addEmptyTask(status);
  };

  if (tasks) {
    tasksForStatus = tasks.filter((task) => task.status === status);
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => (
      <Task
        addTask={(task) => addTask(task)}
        deleteTask={(id) => deleteTask(id)}
        moveTask={(id, status) => moveTask(id, status)}
        key={task.id}
        task={task}
      />
    ));
  }

  return (
    <div className="statusLine">
      <h3>{status}</h3>
      {taskList}
      <button className="button addTask">+</button>
    </div>
  );
};

export default StatusLine;
