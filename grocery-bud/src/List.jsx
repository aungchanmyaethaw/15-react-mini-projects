import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, deleteItem, editItem }) => {
  return (
    <div className="grocery-container">
      {items.map(({ id, title }) => (
        <div key={id} className="grocery-item">
          <h4 className="title">{title}</h4>
          <div className="btn-container">
            <button className="edit-btn" onClick={() => editItem(id)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => deleteItem(id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
