import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ExistingUserLoginPage } from '../pages/ExistingUserLogin';

export default function ExistingUserRoutes() {
  return (
    <>
      <Route path="/" exact component={ExistingUserLoginPage} />
      <Redirect to="/" />
    </>
  );
}
