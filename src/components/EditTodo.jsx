import { useState } from "react";

// eslint-disable-next-line react/prop-types
function EditTodo({ todo, editTodo, cancelTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button onClick={cancelTodo} className="btn btn-reverse-primary mr-15">
        Annuler
      </button>
      <button onClick={handleClick} className="btn btn-primary">
        Sauvegarder
      </button>
    </div>
  );
}
export default EditTodo;
