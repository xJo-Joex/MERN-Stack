import { useContext, useState } from "react";
import {
	createTaskRequest,
	deleteTaskRequest,
	getTasksRequest,
	getTaskByIdRequest,
	updateTaskRequest,
	updateTaskDoneRequest,
} from "../api/task.api.js";
import { TaskContext } from "./TaskContext";

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	const loadTask = async () => {
		const response = await getTasksRequest();
		setTasks(response.data);
	};

	const createTask = async (values) => {
		try {
			const res = await createTaskRequest(values);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
	const deleteTask = async (id) => {
		const res = await deleteTaskRequest(id);
		setTasks((tasks) => tasks.filter((task) => task.id !== id));

		console.log(res);
	};
	const getTaskById = async (id) => {
		try {
			const res = await getTaskByIdRequest(id);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const updateTask = async (id, values) => {
		try {
			const res = await updateTaskRequest(id, values);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
	const updateTaskDone = async (id) => {
		try {
			const taskFound = tasks.find((task) => task.id === id);
			await updateTaskDoneRequest(id, taskFound.done === 0 ? true : false);
			setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<TaskContext.Provider
			value={{ tasks, loadTask, deleteTask, createTask, updateTask, getTaskById, updateTaskDone }}
		>
			{children}
		</TaskContext.Provider>
	);
};
