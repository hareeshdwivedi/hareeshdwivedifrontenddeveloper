import React from "react";
import {BsCheckLg} from "react-icons/bs";

const Checkbox = ({id, name, handleFilter, checked}) => {
  return (
    <label htmlFor={name} className="relative flex items-center my-1 cursor-pointer space-x-1 relative">
      <input
        id={name}
        data-testid="filter-checkbox"
        data-filter={id}
        type="checkbox"
        name={name}
        onChange={handleFilter}
        checked={checked}
        className="appearance-none w-7 h-7 border-2"
      />
      <BsCheckLg
        className={`${checked ? 'opacity-1 animate-check' : 'opacity-0'} absolute top-1 left-0 w-5 h-5 transition`}/>
      <p>{name}</p>
    </label>
  );
}

export default Checkbox;