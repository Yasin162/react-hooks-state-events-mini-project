import React from "react";

function NewTaskForm({categories, onSubmit, formOption, formText, newText}) {
  
  const options = categories.slice(1).map(option => <option value={option}>{option}</option>)
  
  return (
    <form onSubmit={onSubmit} className="new-task-form">
      <label >
        Details
        <input onChange={formText} value={newText} type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={formOption}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
