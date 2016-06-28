import React, {
  Component
} from 'react';
import {
  Page,
  TabBar
} from 'daifee-react-component';


export default class TabBarPage extends Component {
  state = {
    selectedIndex: 0
  };

  render() {
    let {selectedIndex} = this.state;

    return (
      <Page>
        <TabBar>
          <TabBar.Item
            selected={selectedIndex === 0}
            title='Home'
            onClick={() => {
              this.setState({
                selectedIndex: 0
              });
            }}>
            <h1>TabBar</h1>
            <p>发i哦剪发i熬剪发i道交法i都爱</p>
            <p>发i哦剪发i熬剪发i道交法i都爱</p>
            <p>发i哦剪发i熬剪发i道交法i都爱</p>
            <p>发i哦剪发i熬剪发i道交法i都爱</p>
          </TabBar.Item>
          <TabBar.Item
            selected={selectedIndex === 1}
            title='Attention'
            onClick={() => {
              this.setState({
                selectedIndex: 1
              });
            }}>
            <h1>Attention</h1>
            <p>放假爱偶佛教阿迪哦放假带哦</p>
            <p>放假爱偶佛教阿迪哦放假带哦</p>
            <p>放假爱偶佛教阿迪哦放假带哦</p>
            <p>放假爱偶佛教阿迪哦放假带哦</p>
          </TabBar.Item>
          <TabBar.Item
            selected={selectedIndex === 2}
            title='Loading'
            onClick={() => {
              this.setState({
                selectedIndex: 2
              });
            }}>
            <h1>Loading</h1>
            <p>Loading loiading</p>
            <p>Loading loiading</p>
            <p>Loading loiading</p>
            <p>Loading loiading</p>
          </TabBar.Item>
        </TabBar>
      </Page>
    );
  }
}
