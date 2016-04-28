import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { store } from './reducers';

import Main from './views/main';
import FourOhFour from './views/404';
import Stallions from './views/stallions'
import Stuff from './components/Stuff';
import Boo from './components/Boo';
import Contact from './views/contact';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main} />
      <Route path="/hingstar" component={Stallions} />
      <Route path="/kontakt" component={Contact} />
      <Route path="*" component={FourOhFour}/>
    </Router>
    </Provider>,
    document.getElementById('root')
);
