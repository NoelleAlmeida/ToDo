import React from "react";
import PropTypes from "prop-types";
import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted ? "line-through opacity-70" : ""
            }`}
          >
            {task.title}
          </button>

          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;