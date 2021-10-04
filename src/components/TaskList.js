import React, { useState } from "react";
import  Task from './Task'

function TaskList({tasks, deleteTask}) {
  

   const DisplayTasks = tasks.map(task => <li> <Task key='67' deleteTask={deleteTask} text={task.text} category={task.category}/> </li>)
   console.log(tasks.text)
  return (
    <div className="tasks">
      <ul>
        {DisplayTasks}
      </ul>
    </div>
  );
}

export default TaskList;
