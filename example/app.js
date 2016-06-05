import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import HomePage from './HomePage';
import ButtonPage from './ButtonPage';
import CellPage from './CellPage';
import IconPage from './IconPage';
import MaskPage from './MaskPage';
import ToastPage from './ToastPage';
import DialogPage from './DialogPage';
import NotificationPage from './NotificationPage';
import ActionSheetPage from './ActionSheetPage';
import TabBarPage from './TabBarPage';
import PopupPage from './PopupPage';

function App() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={HomePage} />
      <Route path='/button' component={ButtonPage} />
      <Route path='/cell' component={CellPage} />
      <Route path='/icon' component={IconPage} />
      <Route path='/mask' component={MaskPage} />
      <Route path='/toast' component={ToastPage} />
      <Route path='/dialog' component={DialogPage} />
      <Route path='/notification' component={NotificationPage} />
      <Route path='/actionsheet' component={ActionSheetPage} />
      <Route path='/tabbar' component={TabBarPage} />
      <Route path='/popup' component={PopupPage} />
    </Router>
  );
}


ReactDOM.render((<App />), document.getElementById('app'));
