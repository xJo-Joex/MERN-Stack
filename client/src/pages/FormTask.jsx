import React from "react";
import { Form, Formik } from "formik";
import { createTask } from "../api/task.api";

const FormTask = () => {
	return (
		<div>
			<Formik
				initialValues={{
					title: "",
					description: "",
				}}
				onSubmit={async (values, actions) => {
					console.log(values);
					try {
						const res = await createTask(values);
						console.log(res);
						actions.resetForm();
					} catch (error) {
						console.log(error);
					}
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
