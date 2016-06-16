import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {ListView} from 'daifee-react-component';
import './style';

// 模拟从数据库获取数据（同步）
let radom = 0;
function findData(page, count) {
  let start = (page - 1) * count;
  let end = page * count;
  let result = [];

  // 只有5页
  if (page > 5) {
    return result;
  }

  for (; start < end; start++) {
    result.push({
      id: start,
      text: ('daifee: ' + start + ' - ' + radom)
    });
  }

  return result;
}

// 模拟异步获取数据
function getData(page, count) {
  let data = findData(page, count);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}


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
      <div className='main'>
        <ListView
          ref='listView'
          data={data}
          renderRow={this.renderRow}
          loadMoreAction={this.loadMoreAction}
          refreshAction={this.refreshAction}
          iscrollOptions={{
            click: true,
            scrollbars: true
          }} />

        <div onClick={this.clickRefresh} className='refresh'>刷新</div>
      </div>
    );
  }

  componentDidMount() {
    // 保存对 ListView 实例的引用
    this.listView = this.refs.listView;

    // 初始 page = 0，所以可以在这里执行 loadMoreAction
    this.loadMoreAction();
  }

  componentDidUpdate() {
    // ListView 更新后，必须执行这个方法
    this.listView.refreshIscroller();
  }

  // 渲染每一行
  renderRow(row, index) {
    return (<div key={row.id}>{row.text}</div>);
  }


  // 加载更多数据（分页）
  loadMoreAction = () => {
    let {page, count, data} = this.state;
    page++;

    // 状态：加载中
    this.listView.loadingMore();

    getData(page, count)
      .then((resData) => {
        if (resData.length < count) {
          // 状态：没有更多
          this.listView.noMore();
        } else {
          // 状态：成功加载
          this.listView.succeedLoadMore();
        }

        data = data.concat(resData);
        this.setState({...this.state, page, data});
      });
  };

  // 刷新数据
  refreshAction = () => {
    let {count} = this.state;
    let page = 1;

    // 记录刷新次数
    radom++;

    // 状态：刷新中
    this.listView.refreshing();

    getData(page, count)
      .then((resData) => {
        let data = resData;
        // 改变 loadMore 状态
        if (data.length < count) {
          this.listView.noMore();
        } else {
          this.listView.succeedLoadMore();
        }

        // 状态：更新结束
        this.listView.refreshed();
        this.setState({...this.state, page, data});
      });
  };

  clickRefresh = () => {
    this.listView.refresh();
  };
}
