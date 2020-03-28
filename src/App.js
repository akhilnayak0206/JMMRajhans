import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './Home';
// import ComingSoon from './ComingSoon';
// import Receipt from './Receipt';
import ContactUs from './ContactUs';
// import RecipeCovid from './Competition/RecipeCovid';
import DrawingCovid from './Competition/DrawingCovid';
import MaskForAll from './Competition/MaskForAll';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/fight-covid19' component={DrawingCovid} />
        {/* <Route path='/comingsoon' component={ComingSoon} /> */}
        <Route exact path='/home' component={Home} />
        <Route exact path='/maskForAll' component={MaskForAll} />
        {/* <Route exact path='/fight-covid19-recipe' component={RecipeCovid} /> */}
        <Route exact path='/contactus' component={ContactUs} />
        {/* <Route path='/receipt/:token' component={Receipt} /> */}
        <Redirect to='/fight-covid19' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
