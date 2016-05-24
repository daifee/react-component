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
    show: false
  };

  show = () => {
    this.setState({show: true});
  };

  hide = () => {
    this.setState({show: false});
  };

  render() {
    const {show} = this.state;

    return (
      <Page title='Mask'>
        <Button type='primary' onClick={this.show}>Show</Button>
        <Mask show={show} onClick={this.hide} />
      </Page>
    );
  }
}
