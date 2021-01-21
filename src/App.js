import "./App.css";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Products from "./Components/Products";

function App() {
	return (
		<div className="app">
			<Nav />
			<Hero />
			<Products />
		</div>
	);
}

export default App;
