import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './organism/App';
import store from './organism/features/store';
import fetchAllGoals from './utils/fetchAllGoals';


const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App fetchAllGoals={fetchAllGoals}/>
  </Provider>,
  root
);
