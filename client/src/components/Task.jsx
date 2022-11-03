import React from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../hooks/useTask";

const Task = ({ task }) => {
	const {deleteTask, updateTaskDone} = useTask()
	const navigate = useNavigate()
	
	return (
		<div>
			<h2>{task.title}</h2>
			<p>{task.description}</p>
			<span>{task.done ? "✓" : "❌"}</span>
			<span>{task.createAt}</span>
			<button onClick={() => deleteTask(task.id)}>Delete</button>
			<button onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button>
			<button onClick={()=>updateTaskDone(task.id)}>Toogle Done</button>
		</div>
	);
};

export default Task;
