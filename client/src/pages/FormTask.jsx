import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useTask } from "../hooks/useTask";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const FormTask = () => {
	const { createTask, updateTask, getTaskById } = useTask();
	const [task, setTask] = useState({ title: "", description: "" });
	const navigate = useNavigate();

	const params = useParams();
	console.log(params);
	useEffect(() => {
		const loadTask = async () => {
			if (params.id) {
				const task = await getTaskById(params.id);
				setTask(task);
			}
		};
		loadTask();
	}, []);
	return (
		<div>
			<Formik
				initialValues={task}
				enableReinitialize={true}
				onSubmit={async (values, actions) => {
					console.log(values);
					if (params.id) {
						await updateTask(values.id, values);
						navigate("/");
					} else {
						await createTask(values);
						navigate("/");
					}
					actions.resetForm();
				}}
			>
				{({ handleChange, handleSubmit, values, isSubmitting }) => (
					<Form onSubmit={handleSubmit} className="bg-slate-300 mx-auto max-w-sm rounded-md p-4 mt-10">
						<h1 className="font-bold text-white text-xl uppercase text-center">{params.id ? "Edit Task" : "Create Tasks"}</h1>

						<label className="block mb-2">Title:</label>
						<input
							type={"text"}
							name="title"
							className="px-2 py-1 w-full mb-2"
							placeholder="Write a title"
							onChange={handleChange}
							value={values.title}
						/>

						<label className="block mb-2">Description:</label>
						<textarea
							name="description"
							rows={3}
							placeholder="Write a description"
							className="px-2 py-1 w-full mb-2"
							onChange={handleChange}
							value={values.description}
						></textarea>
						<button type="submit" disabled={isSubmitting} className="block bg-indigo-400 px-2 py-1 text-white rounded-md mx-auto mt-2">
							{isSubmitting ? "saving..." : "save"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormTask;
