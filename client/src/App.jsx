import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider.jsx";
import FormTask from "./pages/FormTask";
import NotFound from "./pages/NotFound";
import "./index.css";

import TasksPage from "./pages/TasksPage";

function App() {
	return (
		<TaskContextProvider>
			<div className=" h-screen">
				<Navbar />
				<div className="container bg-slate-700 h-full mx-auto p-4">
					<Routes>
						<Route path="/" element={<TasksPage />} />
						<Route path="/new" element={<FormTask />} />
						<Route path="/edit/:id" element={<FormTask />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</TaskContextProvider>
	);
}

export default App;
