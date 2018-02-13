import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import {browserHistory, reduxStore} from './controller/controller';

import './App.css';

import Header from './view/common/Header';
import HomePage from './view/home/HomePage';
import AboutPage from './view/about/AboutPage';
import ContactPage from './view/contact/ContactPage';

export default function render(props) {
  return (
    <Provider store={reduxStore}>
      <Router history={browserHistory}>
        <div>
          <Header/>
          <main>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
          </main>
        </div>
      </Router>
    </Provider>
  );
}
