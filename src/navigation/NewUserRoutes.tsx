import React from "react";
import { Route } from "react-router-dom";
import { WalletCreatePage } from "../pages/Create";
import { HomePage } from "../pages/Home";

export default function NewUserRoutes() {
	return (
		<>
			<Route path="/" exact component={HomePage} />
			<Route path="/create" exact component={WalletCreatePage} />
		</>
	);
}
