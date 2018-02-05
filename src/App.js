import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import configureStore from './redux/store/configureStore';
import {listContactsActionCreator} from './redux/actions/contactActionCreators';

import './App.css';

import Header from './react/common/Header';
import Home from './react/home/Home';
import About from './react/about/About';
import Contact from './react/contact/Contact';

function App(props) {
  const store = configureStore();
  // initialize contact list if persisted
  
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
