import { useEffect, useState } from "react";
import { db } from "./firebase_configjs";
import "./styles.css";
import firebase from "firebase";
import TodoListItem from "./Todo";

export default function App() {
  const [todoinput, settodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoinput
    });
    settodoInput("");
  }

  return (
    <div className="App">
      <div>
        <h1>To Do App</h1>
        <form>
          <input
            value={todoinput}
            onChange={(e) => settodoInput(e.target.value)}
            className="todo-inputarea"
            placeholder="Enter the text here."
          />
          <button type="submit" onClick={addTodo} className="add-button">
            Add Me.
          </button>
        </form>
        {todos.map((todo) => (
          <TodoListItem todo={todo.todo} id={todo.id} />
        ))}
      </div>
    </div>
  );
}
