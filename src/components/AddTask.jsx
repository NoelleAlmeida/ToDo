import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTask() {
    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={handleAddTask}
        className="bg-slate-500 text-white px-4 py-2 rounded-md w-full"
      >
        Adicionar
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};

export default AddTask;