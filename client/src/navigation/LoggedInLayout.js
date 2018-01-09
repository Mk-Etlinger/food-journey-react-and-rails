import React from 'react';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';

export const LoggedInLayout = ({component: Component, ...props}) => {
  return (
    <Route {...props} render={matchProps => (
      <div className="LoggedInLayout">
          <Navbar/>
          <Component {...matchProps} />
      </div>
    )} />
  )
};