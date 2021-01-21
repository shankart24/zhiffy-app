import React from "react";
import heroImg from "../assets/hero-image.svg";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-content">
				<h1>Buy, Sell & Exchange pre-used goods with no hassle.</h1>
				<p>Verified profiles. Free delivery. 100% Online transactions.</p>
			</div>
			<img src={heroImg} alt="hero-image" height="70%" />
		</div>
	);
};

export default Hero;
