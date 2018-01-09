import React from 'react';
import { Route } from 'react-router-dom';

export const DefaultLayout = ({component: Component, ...props}) => {
  return (
    <Route {...props} render={matchProps => (
      <div className="DefaultLayout">
          <Component {...matchProps} />
      </div>
    )} />
  )
};