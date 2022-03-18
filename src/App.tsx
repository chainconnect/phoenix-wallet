import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
// @ts-ignore
import SnackbarProvider from "react-simple-snackbar";
import NavBar from "./components/NavBar";
import { AppWrapper } from "./components/styled";
import AuthenticatedRoutes from "./navigation/AuthenticatedRoutes";
import ExistingUserRoutes from "./navigation/ExistingUserRoutes";
import NewUserRoutes from "./navigation/NewUserRoutes";
import { useGlobalStore, useVaultStore } from "./utils/store";

function App() {
	const userKey = useVaultStore((state) => state.key);
	const account = useGlobalStore((state) => state.appState.account);

	return (
		<AppWrapper>
			<SnackbarProvider>
				<NavBar />
				<Router>
					<Switch>
						{userKey && !account && <ExistingUserRoutes />}
						{userKey && account && <AuthenticatedRoutes />}
						{!userKey && <NewUserRoutes />}
					</Switch>
				</Router>
			</SnackbarProvider>
		</AppWrapper>
	);
}

export default App;
