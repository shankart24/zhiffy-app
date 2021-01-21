import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import arrowDown from "../assets/arrow-down.svg";
import man from "../assets/m6.jpg";
import map from "../assets/map.svg";
import cart from "../assets/cart.svg";
import heart from "../assets/heart.svg";
import wallet from "../assets/wallet.png";
import message from "../assets/message.svg";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Nav = () => {
	const [signUpFormOpen, setSignUpFormOpen] = useState(false);
	const [loginFormOpen, setLoginFormOpen] = useState(false);
	const [loginState, setLoginState] = useState();

	const handleSignUpForm = () => {
		setSignUpFormOpen((bool) => !bool);
		setLoginFormOpen(false);
	};

	const handleLoginForm = () => {
		setLoginFormOpen((bool) => !bool);
		setSignUpFormOpen(false);
	};

	const isLogin = (bool) => {
		setLoginState(bool);
	};

	return (
		<div className="nav">
			<div className="nav-header">
				<div className="brand-and-search">
					<img src={logo} alt="Zhiffy" height="100%" />
					<input type="text" placeholder="Search products.." size="50" />
				</div>
				<div className="login-btns">
					{loginState ? (
						<div className="user-info">
							<div style={{ display: "flex" }}>
								<img src={map} alt="location-pin" width="20" style={{ marginRight: "3px" }} />
								<h5>Hyderabad</h5>
							</div>
							<div style={{ display: "flex" }}>
								<img src={message} width="20" style={{ marginRight: "3px" }} />
								<h5>Messages</h5>
							</div>

							<img src={man} width="35" style={{ borderRadius: "10px" }} />
						</div>
					) : (
						<div>
							<button onClick={handleSignUpForm} className="signup">
								<h6>Sign Up</h6>
							</button>
							{signUpFormOpen ? <SignupForm /> : ""}
							<button onClick={handleLoginForm} className="login">
								<h6>Login</h6>
							</button>
							{loginFormOpen ? <LoginForm isLogin={isLogin} /> : ""}
						</div>
					)}
				</div>
			</div>
			<div className="nav-items">
				<ul className="categories">
					<li>
						All
						<img src={arrowDown} alt="dropdown" width="15" />
					</li>
					<li>Mobiles</li>
					<li>Laptops</li>
					<li>Video Games</li>
					<li>Watches</li>
					<li>Tablets</li>
				</ul>
				{loginState ? (
					<div className="to-sell">
						<img src={wallet} />
						<img src={heart} />
						<img src={cart} />

						<button>
							<h6>Sell</h6>
						</button>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Nav;
