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
			<h1>{params.id ? "Edit Task" : "Create Tasks"}</h1>
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
					<Form onSubmit={handleSubmit}>
						<label>title</label>
						<input
							type={"text"}
							name="title"
							placeholder="Write a title"
							onChange={handleChange}
							value={values.title}
						/>

						<label>description</label>
						<textarea
							name="description"
							rows={3}
							placeholder="Write a description"
							onChange={handleChange}
							value={values.description}
						></textarea>
						<button type="submit" disabled={isSubmitting}>
							{isSubmitting ? "saving..." : "save"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormTask;
