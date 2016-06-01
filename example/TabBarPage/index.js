import React, {
  Component
} from 'react';
import {TabBar} from 'daifee-react-component';
import './style';

export default class TabBarPage extends Component {
  state = {
    selected: 0
  };

  render() {
    const {selected} = this.state;

    return (
      <TabBar>
        <TabBar.Item
          selected={selected === 0}
          icon='icon icon-chat'
          title='Daifee'
          badge='83'
          onClick={() => this.select(0)}>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
          <h1>TabBar</h1>
          <p>Daifeefee</p>
        </TabBar.Item>
        <TabBar.Item
          selected={selected === 1}
          icon='icon icon-group-chat'
          title='WeChat'
          badge=''
          onClick={() => this.select(1)}>
          <h1>TabBar</h1>
          <p>WeChat</p>
        </TabBar.Item>
        <TabBar.Item
          selected={selected === 2}
          icon='icon icon-car'
          title='Zzc'
          onClick={() => this.select(2)}>
          <h1>TabBar</h1>
          <p>1</p>
        </TabBar.Item>
      </TabBar>
    );
  }

  select(index) {
    this.setState({selected: index});
  }
}
