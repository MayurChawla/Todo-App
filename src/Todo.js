import React from "react";
import { db } from "./firebase_configjs";
import "./Todo.css";

export default function TodoListItem({ todo, id }) {
  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div>
      <div classNAme="todo-div">
        <span className="todo-span">{todo}</span>
        <button onClick={deleteTodo} className="todo-button">
          x
        </button>
      </div>
    </div>
  );
}
