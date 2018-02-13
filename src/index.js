import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {initializeController} from './controller/controller';
 
import './index.css';

import App from './App';

initializeController();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
