import React, { useState } from "react";

const LoginForm = (props) => {
	const [loginData, setLoginData] = useState({});

	const handleInput = (e) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		});
	};

	const login = () => {
		fetch("http://localhost:5000/login", {
			method: "POST",
			body: JSON.stringify({
				email: loginData.email,
				password: loginData.password,
			}),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				props.isLogin(data.success);
				alert(data.msg);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login();
	};

	return (
		<div className="form-container">
			<h2>Login</h2>
			<form className="login-form" onSubmit={handleSubmit}>
				<label>
					<h6>Email</h6>
				</label>
				<input type="email" name="email" onChange={handleInput} required />

				<label>
					<h6>Password</h6>
				</label>
				<input type="password" name="password" onChange={handleInput} required />

				<button type="submit">
					<h6>Login</h6>
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
