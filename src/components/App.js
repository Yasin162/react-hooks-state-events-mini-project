import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
 console.log({ CATEGORIES, TASKS });

function App() {

  const [newTasks, setNewTasks] = useState(TASKS)

  const [newText, setNewText] = useState('')
  const [newOption, setNewOption] = useState('Code')


  const formOption = (e) => {
    setNewOption(e.target.value)
  }
  const formText = (e) => {
    setNewText(e.target.value)
  }

  const onTaskFormSubmit = (e) => {
    e.preventDefault()
    const formData = {text: newText, category: newOption}
    const arrayOfNewTasks = [...newTasks, formData]
    setNewTasks(arrayOfNewTasks)
    console.log(newTasks)
    setNewText('')
  }

  const deleteTask = (e) => {
console.log(e.target.id, )
  //   const newTasks = newTasks.filter(task => task.text !== e.target.id )
  //   setNewTasks(newTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}/>
      <NewTaskForm formOption={formOption} newText={newText} formText={formText} onSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList tasks={newTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
