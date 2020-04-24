import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import SignUpLogin from "./components/SignUpLogin";
import Jokes from "./components/Jokes";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Route path="/(login|signup)/">
				<SignUpLogin />
			</Route>
			<PrivateRoute path="/jokes">
				<Jokes />
			</PrivateRoute>
		</div>
	);
}

export default App;
