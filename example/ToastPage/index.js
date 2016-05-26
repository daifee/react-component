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
          <Button type='primary' onClick={this.showComponent}>Loading Component</Button>
          <Button type='primary' onClick={this.showAPI}>Loading API</Button>
        </div>

        <Toast
          show={state.toast1}
          icon='loading'
          content='点击隐藏'
          onClick={this.hideComponent} />
      </Page>
    );
  }

  componentDidMount() {
    Toast.show('attention', '注意啦');
  }

  showComponent = () => {
    let nextState = {...this.state};
    nextState.toast1 = true;

    this.setState(nextState);
  };

  hideComponent = () => {
    let nextState = {...this.state};
    nextState.toast1 = false;

    this.setState(nextState);
  };

  showAPI() {
    Toast.showLoading('加载中…');

    setTimeout(() => {
      Toast.hideLoading();
    }, 1000);
  }
}




