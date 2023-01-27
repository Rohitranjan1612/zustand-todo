import * as React from "react";

import useStore from "../store";

function TodoListItems() {
  const store = useStore((state) => state);

  return (
    <>
      {store.todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            onClick={() => store.toggleTodo(todo.id)}
            checked={todo.done}
          />
          <input
            value={todo.text}
            onChange={(evt) => store.updateTodo(todo.id, evt.target.value)}
          />
          <button onClick={() => store.removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <h3>Todo List</h3>
      <TodoListItems />
    </>
  );
}

export default TodoList;
