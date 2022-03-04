import React from 'react';
import ReactDOM from 'react-dom';
import App from './organism/App';
import { Provider } from 'react-redux';
import store from './organism/features/store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
