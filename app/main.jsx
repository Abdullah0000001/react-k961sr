import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Products from './Products';
import DrawerContainer from './DrawerContainer';
import './styles.css';

ReactDOM.render(
  <React.Fragment>
    <HashRouter>
      <DrawerContainer>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/products" component={Products} />
          <Route exact={true} path="/about" component={About} />
        </Switch>
      </DrawerContainer>
    </HashRouter>
  </React.Fragment>,
    document.querySelector('my-app')
);
