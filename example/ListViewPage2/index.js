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
      id: start + '' + radom,
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

// 渲染每一行
function renderRow(row, index) {
  return (<div key={row.id}>{row.text}</div>);
}

function shouldRefreshIscroller(data, nextData) {
  let result = false;

  if (data.length !== nextData.length) {
    result = true;
  } else {
    for (var i = 0, len = data.length; i < len; i++) {
      if (data[i].id !== nextData[i].id) {
        result = true;
        break;
      }
    }
  }

  return result;
}


export default class ListViewPage extends Component {
  state = {
    page: 0,
    count: 60,
    refreshNum: 0,
    data: [],
    refreshState: 'normal',
    loadMoreState: 'normal'
  };

  listView = null;

  render() {
    let {data, refreshState, loadMoreState} = this.state;

    return (
      <div className='main'>
        <ListView.ListView
          ref='listView'
          shouldRefreshIscroller={shouldRefreshIscroller}
          data={data}
          renderRow={renderRow}
          refreshState={refreshState}
          onNormalRefresh={this.onNormalRefresh}
          onReadyRefresh={this.onReadyRefresh}
          onRefresh={this.onRefresh}
          loadMoreState={loadMoreState}
          onLoadMore={this.onLoadMore}
          iscrollOptions={{
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

  onNormalRefresh = () => {
    this.setState({...this.state, refreshState: 'normal'});
  };

  onReadyRefresh = () => {
    this.setState({...this.state, refreshState: 'ready'});
  };

  onRefresh = () => {
    this.refreshAction();
  };

  onLoadMore = () => {
    this.loadMoreAction();
  };




  // 加载更多数据（分页）
  loadMoreAction = () => {
    let {page, count, data, loadMoreState} = this.state;
    page++;

    // 状态：加载中
    loadMoreState = 'loading';
    this.setState({...this.state, loadMoreState});

    getData(page, count)
      .then((resData) => {
        if (resData.length < count) {
          loadMoreState = 'end';
        } else {
          loadMoreState = 'normal';
        }

        data = data.concat(resData);
        this.setState({...this.state, page, data, loadMoreState});
      });
  };

  // 刷新数据
  refreshAction = () => {
    let {count, refreshState, loadMoreState} = this.state;
    let page = 1;

    // 记录刷新次数
    radom++;

    // 状态：刷新中
    refreshState = 'loading';
    loadMoreState = 'none';
    this.setState({...this.state, refreshState, loadMoreState});

    getData(page, count)
      .then((resData) => {
        let data = resData;
        // 改变 loadMore 状态
        if (data.length < count) {
          loadMoreState = 'end';
        } else {
          loadMoreState = 'normal';
        }

        // 状态：更新结束
        refreshState = 'normal';
        this.setState({...this.state, page, data, refreshState, loadMoreState});
        this.listView.scrollToTop();
      });
  };

  clickRefresh = () => {
    // this.listView.refresh();
  };
}
