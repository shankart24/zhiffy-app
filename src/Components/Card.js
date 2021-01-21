import React from "react";
import heart from "../assets/heart2.svg";
import man from "../assets/m6.jpg";
import camera from "../assets/camera.jpg";

const Card = () => {
	return (
		<div className="card">
			<div className="card-header">
				<div className="post-details">
					<img src={man} width="40" />
					<div>
						<h5>Mathews</h5>
						<h6>2 days ago</h6>
					</div>
				</div>
				<img src={heart} width="20" />
			</div>
			<div className="card-image">
				<img src={camera} />
			</div>
			<div className="card-footer">
				<h5>Nikon Camera</h5>
				<h6>2 months old. In perfect condition. Comes with all the accessories.</h6>
			</div>
		</div>
	);
};

export default Card;
