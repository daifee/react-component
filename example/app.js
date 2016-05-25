import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import HomePage from './HomePage';
import ButtonPage from './ButtonPage';
import CellPage from './CellPage';
import IconPage from './IconPage';
import MaskPage from './MaskPage';
import ToastPage from './ToastPage';

function App() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={HomePage} />
      <Route path='/button' component={ButtonPage} />
      <Route path='/cell' component={CellPage} />
      <Route path='/icon' component={IconPage} />
      <Route path='/mask' component={MaskPage} />
      <Route path='/toast' component={ToastPage} />
    </Router>
  );
}


ReactDOM.render((<App />), document.getElementById('app'));
