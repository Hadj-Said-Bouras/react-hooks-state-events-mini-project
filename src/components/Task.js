import React from "react";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <span className="task-category">{task.category}</span>
      <span className="task-text">{task.text}</span>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
}

export default Task;
