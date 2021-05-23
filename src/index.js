import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from 'logic/store';

import App from 'ui/components/App';
import './ui/global.scss';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </StoreProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
