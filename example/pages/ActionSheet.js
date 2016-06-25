import React, {
  Component
} from 'react';
import {
  Page,
  ActionSheet,
  Button
} from 'daifee-react-component';


export default class ActionSheetPage extends Component {
  state = {
    title: '空值',
    actions: ['one', 'two', 'delete', 'cancel'],
    destroyIndex: 2
  };

  render() {
    let {title, actions, destroyIndex} = this.state;

    return (
      <Page>
        <h1>ActionSheet</h1>
        <ActionSheet
          title={title}
          actions={actions}
          callback={this.doAction}
          destroyIndex={destroyIndex}/>
        <br />
        <br />
        <div className='wrap'>
          <Button onClick={() => {
            ActionSheet.show({
              title,
              actions,
              destroyIndex,
              callback: this.doAction
            });
          }}>按钮</Button>
        </div>
      </Page>
    );
  }

  doAction = (index) => {
    let {title, actions} = this.state;
    // cancel
    if (index === 3) return;
    title = index === 2 ? '空值' : actions[index];
    let nextState = {...this.state, title};
    this.setState(nextState);
  };
}
