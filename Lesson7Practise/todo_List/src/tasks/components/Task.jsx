import React from 'react';

const Task = ({ id, done, text, onChange, onDelete }) => {
  const listItemClasses = done ? 'list-item list-item_done' : 'list-item';
  return (
    <li className={listItemClasses}>
      <input
        className="list-item__checkbox"
        type="checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

export default Task;
