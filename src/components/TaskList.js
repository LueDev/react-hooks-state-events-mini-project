import React from "react";
import Task from "./Task"

function TaskList({tasks, categories, onTaskDelete}) {

  let renderedTasks; 
  
  if(categories.length > 0){
      if(categories.includes('All')){renderedTasks = tasks}
      else {renderedTasks = tasks.filter(task => {
      return categories.includes(task.category)
         })} 
  } else {
    renderedTasks = tasks
  }

  const tasksToRender = categories.length > 0 ? renderedTasks : tasks
  let count = 0
  
  return (
    <div className="tasks">
      {tasksToRender.map((task) => {
        return <Task key={`${task}${++count}`} task={task} onDelete={onTaskDelete}></Task>
      })}
    </div>
  );
}

export default TaskList;
