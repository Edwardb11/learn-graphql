import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import TodoList from "./TodoList";
const data = [
  {
    id: 0,
    title: "Hola mundo",
    completed: false,
  },
  {
    id: 1,
    title: "Joseda",
    completed: true,
  },
  {
    id: 2,
    title: "Manuela",
    completed: false,
  },
];

export const TodoContainer = () => {

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  });

  function handleComplete(id) {
const index = items.findIndex((item)=> item.id=== id)
items[index].completed =!items[index].completed
setItems([...items])
  }

  const itemsCompleted = useMemo(()=>{
    return items.filter((item)=>item.completed).length
  })
  return <div>
    <TodoList items={items} onComplete={handleComplete} itemsCompleted={itemsCompleted} totalItem={items.length}/>
  </div>;
};

