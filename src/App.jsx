import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { nanoid } from "nanoid";
import Form from "./components/Form";

import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [items, setItems] = useState(groceryItems);
  const [count, setCount] = useState(0);
  const editCompleted = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item deleted");
  };
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success("grocery item added");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Items items={items} editCompleted={editCompleted} />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
      />
    </section>
  );
}

export default App;
