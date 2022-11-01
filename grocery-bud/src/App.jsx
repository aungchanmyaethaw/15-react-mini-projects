import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [list, setList] = useLocalstorage("list", []);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      showAlert(true, "Please Enter Value.", "danger");
    } else if (name && isEditing) {
      setList((prevList) => {
        return prevList.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }

          return item;
        });
      });

      setIsEditing(false);
      setEditId(null);
      setName("");
      showAlert(true, "Item Edited Successfully", "success");
    } else {
      const newItem = { id: uuidv4(), title: name };
      setList((prev) => [...prev, newItem]);
      setName("");
      showAlert(true, "Item Added.", "success");
    }
  }

  // showAlert
  function showAlert(show = false, msg = "", type = "") {
    setAlert({ show, msg, type });
  }
  // clear all items
  function handleClearItems() {
    setList([]);
    showAlert(true, "All Items Cleared", "danger");
  }

  function handleDeleteSingleItem(id) {
    setList((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
    showAlert(true, "Item Deleted", "danger");
  }

  function handleEdit(id) {
    setIsEditing(true);
    const editItem = list.find((item) => item.id === id);
    console.log(editItem);
    setEditId(editItem.id);
    setName(editItem.title);
  }

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} hideAlert={showAlert} list={list} />}
      <form onSubmit={handleSubmit} className="grocery-form">
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg.eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Add"}
          </button>
        </div>
      </form>

      <List
        items={list}
        deleteItem={handleDeleteSingleItem}
        editItem={handleEdit}
      />

      <button className="clear-btn" onClick={handleClearItems}>
        Clean All Items
      </button>
    </section>
  );
}

const useLocalstorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key) == null) {
      return initialValue;
    }
    return JSON.parse(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default App;
