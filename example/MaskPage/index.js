import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {
  Mask,
  Button
} from '../../src';

export default class MaskPage extends Component {
  state = {
    show: false,
    showTransparent: false
  };

  show = () => {
    this.setState({...this.state, show: true});
  };

  showTransparent = () => {
    this.setState({...this.state, showTransparent: true});
  };

  hide = () => {
    this.setState({show: false, showTransparent: false});
  };

  render() {
    const {show, showTransparent} = this.state;

    return (
      <Page title='Mask'>
        <div className='main'>
          <Button type='primary' onClick={this.show}>Show</Button>
          <Mask show={show} onClick={this.hide} />

          <Button type='primary' onClick={this.showTransparent}>Show Transparent</Button>
          <Mask show={showTransparent} transparent={true} onClick={this.hide} />
        </div>
      </Page>
    );
  }
}
