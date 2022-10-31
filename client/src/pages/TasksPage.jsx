import React, { useEffect, useState } from "react";
import { getTasksRequest } from "../api/task.api";
import Task from "../components/Task";

function TasksPage() {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const loadTask = async () => {
			const response = await getTasksRequest();
			console.log(response);
			setTasks(response.data);
		};

		loadTask();
	}, []);
	console.log(tasks);
	return (
		<div>
			<h1>Tasks</h1>
			{tasks.map((task) => (
				<Task task={task} key={task.id}/>
			))}
		</div>
	);
}

export default TasksPage;
