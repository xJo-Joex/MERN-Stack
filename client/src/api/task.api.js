import axios from "axios";
export const getTasksRequest = async () => await axios.get("http://localhost:4000/tasks");

export const createTaskRequest = async (task) => await axios.post("http://localhost:4000/tasks", task);
export const deleteTaskRequest = async (taskId) => await axios.delete(`http://localhost:4000/tasks/${taskId}`);
export const getTaskByIdRequest = async (taskId) => await axios.get(`http://localhost:4000/tasks/${taskId}`);
export const updateTaskRequest = async (taskId, task) => await axios.put(`http://localhost:4000/tasks/${taskId}`,task);
export const updateTaskDoneRequest = async (taskId, done) => await axios.put(`http://localhost:4000/tasks/${taskId}`,{done});

