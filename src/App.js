import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import ComingSoon from './ComingSoon';
import Receipt from './Receipt';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/comingsoon' component={ComingSoon} />
        <Route exact path='/home' component={Home} />
        <Route path='/receipt' component={Receipt} />
        <Redirect to='/comingsoon' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
