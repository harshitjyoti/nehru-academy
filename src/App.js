import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, ErrorComp } from './components'
import Planets from './container/Planets';

const App = () => {
  return (<Switch>
    <Route exact path='/' component={Login} />
    <Route path='/planets' component={Planets} />
    <Route path='/error' component={ErrorComp} />
    <Route component={Login} />
  </Switch>
  );
}

export default App;
