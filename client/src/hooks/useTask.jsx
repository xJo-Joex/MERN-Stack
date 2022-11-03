import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTask = () => {
	const context = useContext(TaskContext);

	if (!context) {
		throw new Error("Use context must be within a taskContextProvider");
	}
	return  context ;
};