const getTasks = (req, res) => {
	res.send("Obteniendo tareas");
};
const getTask = (req, res) => {
	res.send("Obteniendo una tarea");
};
const createTask = (req, res) => {
	res.send("Creando tarea");
};
const updateTask = (req, res) => {
	res.send("Actualizando tareas");
};
const deleteTask = (req, res) => {
	res.send("Eliminando tarea");
};

export { getTask, getTasks, createTask, updateTask, deleteTask };
