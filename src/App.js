import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <BrowserRouter >
        <Navigation />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact}/>


    </BrowserRouter>

    {/* <div>
    
    <Navigation />
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </div> */}



  </div>
);

export default App;
