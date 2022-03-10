import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './organism/App';
import store from './organism/features/store';


const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
