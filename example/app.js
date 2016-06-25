import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import pagesMapping from './pagesMapping';
import {
  Page,
  CellsTitle,
  Cells,
  Cell,
  CellBody
} from 'daifee-react-component';
import FastClick from 'fastclick';
import './style';

// fastclick
FastClick.attach(document.body);

// 定义路由
function Routes() {
  let routes = pagesMapping.map((page, index) => {
    return (<Route key={index} path={page.name} component={page.component} />);
  });

  routes.unshift(<IndexRoute key={pagesMapping.length} component={Home}/>);

  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        {routes}
      </Route>
    </Router>
  );
}

// app
function App(props) {
  let {location, children} = props;
  document.title = props.children.type.name;

  return (
    <Page.Scene action={location.action}>
      {React.cloneElement(children, {key: location.pathname})}
    </Page.Scene>
  );
}

// 首页
function Home() {
  return (
    <Page>
      <h1>Components</h1>
      <CellsTitle>Components</CellsTitle>
      <Cells>{pagesMapping.map((page, index) => {
        return (
          <Cell
            key={index}
            arrow={true}
            access={true}
            component={Link}
            to={'/' + page.name}>
            <CellBody>{page.name}</CellBody>
          </Cell>
        );
      })}</Cells>
    </Page>
  );
}

ReactDOM.render((<Routes />), document.getElementById('app'));
