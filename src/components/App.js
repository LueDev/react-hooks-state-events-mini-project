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
  const [newTask, setNewTask] = useState('') //could've combined this and newTaskCategory into a stateful object
  const [newTaskCategory, setNewTaskCategory] = useState('Code')

  function handleTaskDelete (event){
    const remainingTasks = todoTasks.filter((task) => task.text !== event.target.parentNode.querySelector('.text').innerText)
    setTodoTasks(remainingTasks)
  }

  function handleNewTaskChange (event){
    setNewTask(event.target.value)
  }

  // console.log("new task: ", newTask)
  // console.log("new task category: ", newTaskCategory)
  

  function handleNewTaskAddedSubmit (event){
    event.preventDefault()
    // console.log("called from handle new task added submit")
    const task = {   
      text: newTask,
      category: newTaskCategory,
    }
    // const newTaskAdd = <Task key={newTask} task={task} onDelete={handleTaskDelete}></Task>
    const addedTasks = [...todoTasks, task]
    setTodoTasks(addedTasks)
    setNewTask("")
  }

  function handleNewTaskCategoryChange(event){
    setNewTaskCategory(event.target.value)
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
      <NewTaskForm categories={categories} setCategory={newTaskCategory} newTask={newTask} onNewTaskChange={handleNewTaskChange} onNewTaskCategoryChange={handleNewTaskCategoryChange} onAddNewTaskSubmit={handleNewTaskAddedSubmit}/>
      <TaskList tasks={todoTasks} categories={selectedCategories} onTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
