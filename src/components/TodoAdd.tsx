import * as React from "react";

import useStore from "../store";

function TodoAdd() {
  const store = useStore((state) => state);

  return (
    <div>
      <input
        value={store.newTodo}
        onChange={(evt) => store.setNewTodo(evt.target.value)}
        placeholder="New todo"
      />
      <button
        onClick={() => {
          store.addTodo();
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoAdd;
