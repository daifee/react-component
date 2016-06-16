import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {ListView} from 'daifee-react-component';
import './style';

export default class ListViewPage extends Component {
  state = {
    page: 0,
    count: 60,
    refreshNum: 0,
    data: []
  };

  listView = null;

  render() {
    let {data} = this.state;

    return (
      <ListView
        ref='listView'
        data={data}
        renderRow={this.renderRow}
        onLoadMore={this.onLoadMore}
        onRefresh={this.onRefresh}
        iscrollOptions={{
          click: true,
          scrollbars: true,
          // bounce: true
        }} />
    );
  }

  componentDidMount() {
    this.listView = this.refs.listView;

    this.loadMore();
  }



  componentDidUpdate() {
    // 需要优化
    this.listView.iscroller.refresh();
  }

  loadMore() {
    let {page, count, data, refreshNum} = this.state;
    page++;

    this.listView.loadingMore();
    setTimeout(() => {
      let start = data.length;
      let end = page * count;
      for (; start < end; start++) {
        data.push(start + ' - ' + refreshNum);
      }

      this.setState({...this.state, page, data});
      this.listView.succeedLoadMore();
    }, 1000);
  }

  refresh() {
    let {page, count, data, refreshNum} = this.state;
    page = 1;
    data = [];
    refreshNum++;

    this.listView.refresh();
    setTimeout(() => {
      let start = data.length;
      let end = page * count;
      for (; start < end; start++) {
        data.push(start + ' - ' + refreshNum);
      }

      this.setState({...this.state, page, data, refreshNum});
      this.listView.refreshed();
    }, 1000);
  }

  renderRow(row, index) {
    return (<div key={index}>{row}</div>);
  }


  onLoadMore = () => {
    this.loadMore();
  };

  onRefresh = () => {
    this.refresh();
  };
}
