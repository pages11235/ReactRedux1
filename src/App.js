import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

import Header from './react/common/Header';
import Home from './react/home/Home';
import About from './react/about/About';
import Contact from './react/contact/Contact';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
