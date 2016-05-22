import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import Home from './Home';


function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
}


ReactDOM.render((<App />), document.getElementById('app'));
