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
import SwitchPage from './SwitchPage';
import CheckboxPage from './CheckboxPage';

const list = [
  {name: 'Button', href: '#button'},
  {name: 'Cell', href: '#cell'},
  {name: 'Icon', href: '#icon'},
  {name: 'Mask', href: '#mask'},
  {name: 'Toast', href: '#toast'},
  {name: 'Dialog', href: '#dialog'},
  {name: 'Notification', href: '#notification'},
  {name: 'ActionSheet', href: '#actionsheet'},
  {name: 'TabBar', href: '#tabbar'},
  {name: 'Popup', href: '#popup'},
  {name: 'Switch', href: '#switch'},
  {name: 'Checkbox', href: '#checkbox'}
];

function App() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={HomePage} list={list} />
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
      <Route path='/switch' component={SwitchPage} />
      <Route path='/checkbox' component={CheckboxPage} />
    </Router>
  );
}


ReactDOM.render((<App />), document.getElementById('app'));
