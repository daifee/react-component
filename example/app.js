import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './Home';


function App() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Home} />
    </Router>
  );
}


ReactDOM.render((<App />), document.getElementById('app'));
