import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {onEnterLoginHook,requireAuthHook} from './hook';

export default function getRoutes () {
  return (
    <Route path='/' component={require('./views/Framework').default}>
      <IndexRoute component={require('./pages/index').default} />
      <Route path='user'>
        <Route path='login' component={require('./pages/login').default} onEnter={onEnterLoginHook}  />
        <Route path='register' component={require('./pages/register').default} />
        <Route path='personal' component={require('./pages/user/index').default} onEnter={requireAuthHook}  />
        <Route path='resume' component={require('./pages/user/resume').default} onEnter={requireAuthHook} />
        <Route path='apply' component={require('./pages/user/apply').default} onEnter={requireAuthHook} />
        <Route path='collection' component={require('./pages/user/collection').default} onEnter={requireAuthHook} />
        <Route path='createResume' component={require('./pages/user/createResume').default} onEnter={requireAuthHook} />
      </Route>
    </Route>
  )
}
