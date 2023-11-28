import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {TASKS as tasks, CATEGORIES as categories} from "../data"

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [todoTasks, setTodoTasks] = useState(tasks)
  const [selectedCategories, setSelectedCategories] = useState([])

  function handleTaskDelete (event){
    const remainingTasks = todoTasks.filter((task) => task.text !== event.target.parentNode.querySelector('.text').innerText)
    setTodoTasks(remainingTasks)
  }

  function handleTaskAdded (task){
    const addedTasks = {...todoTasks, task}
    setTodoTasks(addedTasks)
  }

  function handleSelectedCategory(event){
    if(event.target.className === "selected"){

      event.target.className = ""
      const removedCategory = selectedCategories.filter(category => category !== event.target.innerText)
      setSelectedCategories(removedCategory)


    } else {

      event.target.className = "selected"
      setSelectedCategories([...selectedCategories, event.target.innerText])
    
    }
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={categories} />
      <TaskList tasks={todoTasks} categories={selectedCategories} onTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
