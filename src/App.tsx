import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

import ThemeToggler from "./components/ThemeToggler";
import Timer from './components/Timer';

export default function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`app ${theme}`}>
			<ThemeToggler />
			<Timer />
		</div>
	);
}