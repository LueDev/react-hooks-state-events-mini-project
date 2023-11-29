import React from "react";
// import Task from "./Task"

function NewTaskForm({categories, newTask, newTaskCategory, onNewTaskChange, onNewTaskCategoryChange, onAddNewTaskSubmit}) {

  const filteredCategories = categories.filter(category => category !== "All");

  return (
    <form className="new-task-form" onSubmit={onAddNewTaskSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={onNewTaskChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={onNewTaskCategoryChange}>
          {/* render <option> elements for each category here */}
          {filteredCategories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
