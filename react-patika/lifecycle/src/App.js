import { useState } from "react";
import Counter from "./components/Counter";

function App() {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<div className="App">
			{isVisible && <Counter />}

			<br />

			<button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
		</div>
	);
}

export default App;
