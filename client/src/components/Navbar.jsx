import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className={"flex justify-between bg-slate-500 p-4"}>
			<Link to={"/"} className="font-bold text-white">
      <h1>React Mysql</h1>
			</Link>
			<ul className="flex gap-4">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/new">Create task</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
