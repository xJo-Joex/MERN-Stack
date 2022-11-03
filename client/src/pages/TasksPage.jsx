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
		<div className="">
			<h1 className="text-white text-5xl font-bold text-center">Tasks</h1>
			<div className="grid grid-cols-3 gap-2 py-2">

			{renderMain()}
			</div>
		</div>
	);
}

export default TasksPage;
