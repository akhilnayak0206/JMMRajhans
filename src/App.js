import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './Home';
// import ComingSoon from './ComingSoon';
import Receipt from './Receipt';
import Covid19 from './Covid19';
import ContactUs from './ContactUs';
import RecipeCovid from './Competition/RecipeCovid';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/fight-covid19' component={Covid19} />
        {/* <Route path='/comingsoon' component={ComingSoon} /> */}
        <Route exact path='/home' component={Home} />
        <Route exact path='/fight-covid19-recipe' component={RecipeCovid} />
        <Route exact path='/contactus' component={ContactUs} />
        <Route path='/receipt/:token' component={Receipt} />
        <Redirect to='/fight-covid19' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
