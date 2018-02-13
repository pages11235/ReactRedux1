import { createBrowserHistory } from 'history'
import {Provider} from 'react-redux';

import configureStore from '../model/store/configureStore';
import {initializeContactActionCreator} from '../model/actions/contactActionCreators';

export const browserHistory = createBrowserHistory();
export const reduxStore = configureStore();

export function initializeController() {
    reduxStore.dispatch(initializeContactActionCreator());
}