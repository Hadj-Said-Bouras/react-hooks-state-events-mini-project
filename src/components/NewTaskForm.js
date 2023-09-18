import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: categories[0],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({ text: "", category: categories[0] });
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details:
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleInputChange}
          aria-label="Details"
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={newTask.category}
          onChange={handleInputChange}
          aria-label="Category"
        >
          {categories.map((category) => (
            category !== "All" && (
              <option key={category} value={category}>
                {category}
              </option>
            )
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
