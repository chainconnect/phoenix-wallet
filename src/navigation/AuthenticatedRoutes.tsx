import React from 'react';
import { Route } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard';

export default function AuthenticatedRoutes() {
  return (
    <>
      <Route path="/dashboard" exact component={DashboardPage} />
    </>
  );
}
