import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {Button, Popup} from '../../src';
import './style';

export default class PopupPage extends Component {
  state = {
    left: false,
    right: false,
    top: false,
    bottom: false,
    login: false
  };

  render() {
    let {left, right, top, bottom, login} = this.state;

    return (
      <Page title='Popup'>
        <div className='main'>
          <Button onClick={() => this.show('left')}>left</Button>
          <Button onClick={() => this.show('right')}>right</Button>
          <Button onClick={() => this.show('top')}>top</Button>
          <Button onClick={() => this.show('bottom')}>bottom</Button>
          <Button onClick={() => this.show('login')}>login</Button>

          <Popup show={left} direction='left' onClick={() => this.hide()}>
            <ul>
              <li>323243</li>
              <li>发酒疯i熬剪发i熬</li>
              <li>323243</li>
            </ul>
          </Popup>
          <Popup show={right} direction='right' onClick={() => this.hide()}>
            <ul>
              <li>323243</li>
              <li>发酒疯i熬剪发i熬</li>
              <li>323243</li>
            </ul>
          </Popup>
          <Popup show={top} direction='top' onClick={() => this.hide()}>
            <ul>
              <li>323243</li>
              <li>323243faifoajfioajfioajfioajiofjdioa发酒疯i熬剪发i熬</li>
              <li>323243</li>
            </ul>
          </Popup>
          <Popup show={bottom} direction='bottom' onClick={() => this.hide()}>
            <ul>
              <li>323243</li>
              <li>323243faifoajfioajfioajfioajiofjdioa发酒疯i熬剪发i熬</li>
              <li>323243</li>
            </ul>
          </Popup>
          <Popup
            show={login}
            duration={500}
            timingFunction='ease'
            direction='bottom'
            className='login'>
            <div>
              <input type='text' name='username' placeholder='请输入用户名' />
              <input type='password' name='password' placeholder='请输入密码' />
              <Button type='primary' onClick={() => {
                // 请求过程
                setTimeout(() => {
                  this.hide();
                }, 800);
              }}>Login</Button>
              <Button onClick={() => this.hide()}>Cancel</Button>
            </div>
          </Popup>
        </div>
      </Page>
    );
  }

  hide() {
    this.setState({
      left: false,
      right: false,
      top: false,
      bottom: false,
      login: false
    });
  }

  show(direction) {
    let nextState = {...this.state};
    nextState[direction] = true;

    this.setState(nextState);
  }
}
