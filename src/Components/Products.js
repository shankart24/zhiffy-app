import React from "react";
import Card from "../Components/Card";

const Products = () => {
	return (
		<div className="products">
			<div className="product-types">
				<h5>Just in Store</h5>
				<h5>For you</h5>
				<h5>Most viewed</h5>
				<h5>Whats hot?</h5>
			</div>
			<div className="product-grid">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Products;
