import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from 'react-router-dom';
import Headers from './Headers';
import Home from './Pages/Home';
import Services from './Pages/Services';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Footer from './Footer';
import Admin from './Auth/Admin';
import User from './Auth/User';

export class Router extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <Headers />
      //   <Switch>
      //     <Route path="/" exact>
      //       <Home/>
      //     </Route>
      //     <Route path="/services" >
      //       <Services />
      //     </Route>
      //     <Route path="/news">
      //       <News />
      //     </Route>
      //     <Route path="/contact">
      //       <Contact/>
      //     </Route>
      //     {/* <Route path="/login">
      //       <Login />
      //     </Route> */}
      //   </Switch>
      //   <Footer/>
      //   <Switch>
      //     <Route path="/admin"><Admin /></Route>
      //     <Route path="/user"><User /></Route>
      //   </Switch>
      // </BrowserRouter>
      <div></div>
    )
  }
}

export default Router;