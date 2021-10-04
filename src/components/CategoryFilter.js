import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [categoryMatcher, setCategoryMatcher] = useState('All')

  const handleButton = (e) => {
    setCategoryMatcher(e.target.value)
  }

  const categoryButton = categories.map((cb, index) => <button type='button' value={cb} className={categoryMatcher === cb ? 'selected' : null} id={index} onClick={handleButton}>{cb}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
