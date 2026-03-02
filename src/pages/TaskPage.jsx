import { useSearchParams, useNavigate } from "react-router-dom";
import React from "react";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes da Tarefa
        </h1>


        <div className="bg-slate-200 rounded-md shadow p-4 space-y-2">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="bg-slate-400 text-white px-4 py-2 rounded-md w-full"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

export default TaskPage;