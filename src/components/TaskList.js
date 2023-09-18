import React from "react";
import Task from "./Task";

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      <ul className="listOfTasks">
        {tasks.map((task, index) => (
          <li key={index}>
            <Task task={task} onDelete={onTaskDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
