import React from 'react';
import { Route } from 'react-router-dom';

export const LoggedInLayout = ({ component: Component, ...props }) => {
  return (
    <Route { ...props } render={ matchProps => (
      <div className="LoggedInLayout">
          <Component { ...matchProps } />
      </div>
    )} />
  )
};