import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {ScrollView} from 'daifee-react-component';
import './style';

export default class ScrollViewPage extends Component {

  render() {
    let list = [];
    let len = 60;
    for (var i = 0; i < len; i++) {
      list.push((<li key={i}>{i}</li>));
    }

    return (
      <Page title='ScrollView'>
        <div className='main'>
          <p>简单用法</p>
          <ScrollView
            ref={(instance) => console.log(instance)}
            iscrollOptions={{
              scrollbars: true
            }}
            height='200px'>
            <ul>
              {list}
            </ul>
          </ScrollView>

          <br />
          <p>滚动条回弹</p>
          <ScrollView
            iscrollOptions={{
              scrollbars: true,
              shrinkScrollbars: 'scale'
            }}
            height='200px'>
            <ul>
              {list}
            </ul>
          </ScrollView>

          <br />
          <p>水平滚动</p>
          <ScrollView
            className='horizontal-scroll'
            iscrollOptions={{
              scrollX: true,
              scrollY: false
            }}
            height='auto'>
            <ul>
              {list}
            </ul>
          </ScrollView>
        </div>
      </Page>
    );
  }

  componentDidMount() {

  }
}
