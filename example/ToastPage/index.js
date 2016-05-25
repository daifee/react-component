import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {
  Toast,
  Button
} from '../../src';
import './style';

export default class ToastPage extends Component {
  state = {
    toast1: false
  };

  render() {
    let state = this.state;
    //
    return (
      <Page title='Toast'>
        <div className='main'>
          <Button type='primary' onClick={this.show}>Attention</Button>
          <Button type='primary' onClick={this.show}>Attention</Button>
        </div>

        <Toast
          show={state.toast1}
          icon='loading'
          content='点击隐藏'
          onClick={this.hide} />
      </Page>
    );
  }

  show = () => {
    let nextState = {...this.state};
    nextState.toast1 = true;

    this.setState(nextState);
  };

  hide = () => {
    let nextState = {...this.state};
    nextState.toast1 = false;

    this.setState(nextState);
  };
}
