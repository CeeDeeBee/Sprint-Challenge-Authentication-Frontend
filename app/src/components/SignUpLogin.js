import React, { useState } from "react";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import axios from "axios";

const SignUpLogin = () => {
	const location = useLocation();
	const history = useHistory();

	const [formValues, setFormValues] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (location.pathname.includes("signup")) {
			axios
				.post("http://localhost:3300/api/auth/register", formValues)
				.then(() => history.push("/login"))
				.catch((err) => console.log(err));
		} else {
			axios
				.post("http://localhost:3300/api/auth/login", formValues)
				.then((res) => {
					localStorage.setItem("token", JSON.stringify(res.data.token));
					history.push("/jokes");
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className="form-wrapper">
			<h1>{location.pathname.includes("signup") ? "Signup" : "Login"}</h1>
			<div className="nav-buttons">
				<NavLink to="/signup">Signup</NavLink>
				<NavLink to="/login">Login</NavLink>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={formValues.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formValues.password}
					onChange={handleChange}
				/>
				<button type="submit">
					{location.pathname.includes("signup") ? "Signup" : "Login"}
				</button>
			</form>
		</div>
	);
};

export default SignUpLogin;
