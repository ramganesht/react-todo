import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';


import AppHome from './components/AppHome';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Conact</NavLink>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <Route exact path="/" component={AppHome}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
        </div>
      </BrowserRouter>
    );  
  }
}

export default App;
