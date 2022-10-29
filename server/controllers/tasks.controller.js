import { pool } from "../db.js";
const getTasks = async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM tasks");
		res.json(rows);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const getTask = async (req, res) => {
	try {
		const [row] = await pool.query("SELECT * FROM tasks WHERE id= ?", [req.params.id]);
		if (row.length === 0) return res.json({ message: "Task not found" });
		res.status(200).json(row[0]);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const createTask = async (req, res) => {
	const { title, description } = req.body;
	try {
		const [result] = await pool.query("INSERT INTO tasks(title, description) VALUES(?, ?)", [
			title,
			description,
		]);
		console.log(result);
		res.status(201).json({ title, description, id: result.insertId });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const updateTask = async (req, res) => {
	try {
		const [result] = await pool.query("UPDATE tasks SET ? WHERE id=?", [req.body, req.params.id]);
		if (result.affectedRows === 0) res.status(404).json({ message: "task not found" });
		const [row] = await pool.query("SELECT * FROM tasks where id=?", [req.params.id]);
		res.status(200).json(row[0]);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const deleteTask = async (req, res) => {
  try {
    const [row] = await pool.query("DELETE FROM tasks where id=?", [req.params.id]);
    if (row.affectedRows === 0) return res.status(404).json({ message: "Task not found" });
    res.sendStatus(204);
    
  } catch (error) {
    res.status(500).json({message:error.message});

  }
};

export { getTask, getTasks, createTask, updateTask, deleteTask };
