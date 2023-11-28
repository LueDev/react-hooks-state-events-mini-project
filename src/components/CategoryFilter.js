import React from "react";

function CategoryFilter({categories, onSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return <button key={category} onClick={onSelectedCategory}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
