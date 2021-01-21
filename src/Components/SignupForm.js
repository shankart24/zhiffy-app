import React from "react";

const SignupForm = () => {
	return (
		<div className="form-container">
			<h2>Sign Up</h2>

			<form className="signup-form" method="POST" action="http://localhost:5000/register" encType="multipart/form-data">
				<label>
					<h6>Email</h6>
				</label>
				<input type="email" name="email" required />
				<label>
					<h6>Name</h6>
				</label>
				<input type="text" name="name" required />
				<label>
					<h6>Password</h6>
				</label>
				<input type="password" name="password" required />
				<label>
					<h6>Upload picture</h6>
				</label>
				<input type="file" name="primary_img" required />
				<button type="submit">
					<h6>Register</h6>
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
