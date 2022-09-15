import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

import ThemeToggler from "./components/ThemeToggler";
import Timer from './components/Timer';

const App: React.FC = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`app ${theme}`}>
			<ThemeToggler />
			<Timer />
		</div>
	);
}

export default App;