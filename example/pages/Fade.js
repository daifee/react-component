import React, {
  Component
} from 'react';
import {
  Page,
  Fade,
  Switch,
  Cells,
  Cell,
  CellBody,
  CellFooter
} from 'daifee-react-component';

export default class FadePage extends Component {
  state = {
    show: true
  };

  render() {
    let {show} = this.state;

    return (
      <Page>
        <h1>Fade</h1>
        <Cells>
          <Cell>
            <CellBody>Fade 状态</CellBody>
            <CellFooter>
              <Switch checked={show} onChange={(e) => {
                this.setState({show: e.target.checked});
              }} />
            </CellFooter>
          </Cell>
        </Cells>

        <Fade
          show={show}
          component='div'
          duration={2000}
          timingFunction='ease-in'
          onClick={() => {
            this.setState({show: !show});
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 999,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            paddingTop: '60px',
            backgroundColor: '#ddd'
          }}>
          <h2>Fade</h2>
          <p>Fade 是控制淡入淡出的动画</p>
        </Fade>
      </Page>
    );
  }
}
