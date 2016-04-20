import React from 'react';
import Home from './views/home';
import FourOhFour from './views/404';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { store } from './reducers';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}></Route>
      <Route path="*" component={FourOhFour}/>
    </Router>
    </Provider>,
    document.getElementById('root')
);
