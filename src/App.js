import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <BrowserRouter >
        <Navigation />
        <Route path="/" component={About}></Route>
    </BrowserRouter>



  </div>
);

export default App;
