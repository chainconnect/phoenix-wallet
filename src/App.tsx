<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SnackbarProvider from 'react-simple-snackbar';
import NavBar from './components/NavBar';
import { AppWrapper } from './components/styled';
import AuthenticatedRoutes from './navigation/AuthenticatedRoutes';
import ExistingUserRoutes from './navigation/ExistingUserRoutes';
import NewUserRoutes from './navigation/NewUserRoutes';
import { useGlobalStore, useVaultStore } from './utils/store';

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
=======
import React from "react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
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
>>>>>>> arnav/chrome-extension
}

export default App;
