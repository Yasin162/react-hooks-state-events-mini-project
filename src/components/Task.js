import React from "react";
import Button from './Button'

function Task({text, category, key, deleteTask}) {
   
  return (
    <div className="task" id={key}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className='delete' onClick={deleteTask}>{key}</button>
    </div>
  );
}

export default Task;
