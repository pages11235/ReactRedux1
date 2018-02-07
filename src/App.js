import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import configureStore from './redux/store/configureStore';

import './App.css';

import Header from './react/common/Header';
import HomePage from './react/home/HomePage';
import AboutPage from './react/about/AboutPage';
import ContactPage from './react/contact/ContactPage';

function App(props) {
  const store = configureStore();
  // initialize contact list if persisted
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header/>
          <main>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
