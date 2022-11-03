import React from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../hooks/useTask";

const Task = ({ task }) => {
	const { deleteTask, updateTaskDone } = useTask();
	const navigate = useNavigate();

	return (
		<div className="shadow-sm bg-slate-400 rounded-md p-4">
			<header className="flex justify-between ">
				<h2 className="text-sm font-bold">{task.title}</h2>
				<span>{task.done ? "✅" : "❌"}</span>
			</header>
			<p className="text-xs">{task.description}</p>
			<span>{task.createAt}</span>
			<div className="flex justify-end gap-x-2 mt-2 ">
				<button className=" bg-red-400 px-2 py-1 " onClick={() => deleteTask(task.id)}>
					Delete
				</button>
				<button className=" bg-green-300 px-2 py-1" onClick={() => navigate(`/edit/${task.id}`)}>
					Edit
				</button>
				<button className=" bg-orange-300 px-2 py-1" onClick={() => updateTaskDone(task.id)}>
					Toogle Done
				</button>
			</div>
		</div>
	);
};

export default Task;
