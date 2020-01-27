import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <BrowserRouter >
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact}/>


    </BrowserRouter>



  </div>
);

export default App;
