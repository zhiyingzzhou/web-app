import React from 'react';
import { Route, IndexRoute } from 'react-router';

export default function getRoutes () {
  return (
    <Route path='/' component={require('./views/Framework').default}>
      <IndexRoute component={require('./pages/index').default} />
      <Route path='user'>
        <Route path='login' component={require('./pages/login').default} />
        <Route path='register' component={require('./pages/register').default} />
      </Route>
    </Route>
  )
}
