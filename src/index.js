import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import  { combineReducers ,createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';



const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
});

const store = createStore(
  allReducers, 
  {
  products: ['iPhone', 'Mac'], //create an initial state for our store
  user: 'Benny',
  },
  window.devToolsExtension && window.devToolsExtension()
  );



ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
