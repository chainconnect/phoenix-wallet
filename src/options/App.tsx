import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { AppWrapper } from "./components/styled";
import { WalletCreatePage } from "./pages/Create";
import { DashboardPage } from "./pages/Dashboard";
import { HomePage } from "./pages/Home";

function App() {
	return (
		<AppWrapper>
			<NavBar />
			<Router>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/create" exact component={WalletCreatePage} />
					<Route path="/dashboard" exact component={DashboardPage} />
				</Switch>
			</Router>
		</AppWrapper>
	);
}

export default App;
