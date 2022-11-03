import React, { useEffect, useState } from "react";
import { getTasksRequest } from "../api/task.api";
import Task from "../components/Task";
import { useTask } from "../hooks/useTask";

function TasksPage() {
	const { tasks, loadTask } = useTask();
	useEffect(() => {
		loadTask();
	}, []);

	const renderMain = () => {
		if (tasks?.length === 0) <h1>No tasks yet</h1>;
		return tasks?.map((task) => <Task task={task} key={task.id} />);
	};
	return (
		<div>
			<h1>Tasks</h1>
			{renderMain()}
		</div>
	);
}

export default TasksPage;
