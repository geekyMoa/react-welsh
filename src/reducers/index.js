import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import horses from './horses';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'

const myApp = combineReducers({
  horses,
  routing: routerReducer
});

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(
  myApp,
  enhancer
);
