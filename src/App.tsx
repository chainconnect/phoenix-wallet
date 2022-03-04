import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { AppWrapper } from './components/styled';
import { WalletCreatePage } from './pages/Create';
import { HomePage } from './pages/Home';

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/create" exact component={WalletCreatePage} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
