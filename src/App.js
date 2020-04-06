import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ContactUs from './ContactUs';
import DrawingCovid from './Competition/DrawingCovid';
import EssayCovid from './Competition/EssayCovid';
import Home from './Home';
// import ComingSoon from './ComingSoon';
import Receipt from './Receipt';
// import RecipeCovid from './Competition/RecipeCovid';
// import MaskForAll from './Competition/MaskForAll';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/contactus' component={ContactUs} />
        <Route exact path='/essay-mar20' component={EssayCovid} />
        <Route exact path='/fight-covid19' component={DrawingCovid} />
        <Route exact path='/home' component={Home} />
        <Route path='/receipt/:token' component={Receipt} />
        {/* <Route path='/comingsoon' component={ComingSoon} /> */}
        {/* <Route exact path='/maskForAll' component={MaskForAll} /> */}
        {/* <Route exact path='/fight-covid19-recipe' component={RecipeCovid} /> */}
        <Redirect exact from='/' to='/fight-covid19' />
        <Redirect to='/fight-covid19' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
