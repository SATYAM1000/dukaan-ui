/** @format */
import './App.css'
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<div className="payouts-dukaanpay">
			<Sidebar />
			<Content />
		</div>
	);
};

export default App;
