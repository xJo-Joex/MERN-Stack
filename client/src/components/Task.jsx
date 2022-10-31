import React from "react";
import { deleteTask } from "../api/task.api";

const Task = ({ task }) => {
	const handleDelete = async (id) => {
	  const res = await	deleteTask(id);
    console.log(res)
	};
	return (
		<div>
			<h2>{task.title}</h2>
			<p>{task.description}</p>
			<span>{task.done === 1 ? "✓" : "❌"}</span>
			<span>{task.createAt}</span>
			<button onClick={() => handleDelete(task.id)}>Delete</button>
			<button>Edit</button>
		</div>
	);
};

export default Task;
