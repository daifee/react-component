import React, {
  Component
} from 'react';
import {
  Page,
  ListView
} from 'daifee-react-component';

function getRandom() {
  return (Math.random() + '').substring(0, 8)
}

function fetchData(page, count, refresh) {
  let start = (page - 1) * count;
  let end = page * count;
  let data = [];

  let id;

  for (; start < end; start++) {
    id = (start + getRandom());
    data.push({
      id: id,
      content: id
    });
  }

  if (page > 5) {
    data = [];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default class ListViewPage extends Component {
  state = {
    data: [],
    refreshState: 'normal',
    loadMoreState: 'none',
    page: 0,
    count: 20
  };

  render() {
    let {data, refreshState, loadMoreState} = this.state;

    return (
      <Page style={{height: '100%'}}>
        <ListView
          ref='listView'
          data={data}
          renderRow={this._renderRow}
          shouldRefreshIscroller={this._shouldRefreshIscroller}
          renderRefresh={this._renderRefresh}
          offsetRefresh={60}
          refreshState={refreshState}
          onNormalRefresh={this._setNormalRefresh}
          onReadyRefresh={this._setReadyRefresh}
          onRefresh={this._refresh}
          renderLoadMore={this._renderLoadMore}
          offsetLoadMore={-10}
          loadMoreState={loadMoreState}
          onLoadMore={this._loadMore} />
      </Page>
    );
  }

  componentDidMount() {
    this.listView = this.refs.listView;
    // fetchData
    this._loadMore();
  }

  _renderRow(row) {
    return (
      <div style={{
        lineHeight: '40px',
        textAlign: 'center',
        borderTop: '1px solid #ddd'
      }} key={row.id}>{row.content}</div>
    );
  }

  _shouldRefreshIscroller(data, nextData) {
    if (data.length !== nextData.length) {
      return true;
    }

    let result = false;
    for (var i = 0, len = data.length; i < len; i++) {
      if (data[i].id !== nextData[i].id) {
        result = true;
        break;
      }
    }

    return result;
  }

  _renderRefresh(state) {
    return ListView.renderRefresh(state);
  }

  _setNormalRefresh = () => {
    let refreshState = 'normal';
    this.setState({...this.state, refreshState});
  };

  _setReadyRefresh = () => {
    let refreshState = 'ready';
    this.setState({...this.state, refreshState});
  };

  _refresh = () => {
    let {count} = this.state;
    let refreshState = 'loading';
    this.setState({...this.state, refreshState});

    // fetchData
    let page = 1;
    fetchData(page, count, true)
      .then((data) => {
        let loadMoreState = data.length >= count ? 'normal' : 'end';
        this.setState({...this.state, data, page, loadMoreState, refreshState: 'normal'});

        this.listView.scrollToTop();
      });
  };

  _renderLoadMore(state) {
    return ListView.renderLoadMore(state);
  }

  _loadMore = () => {
    let {page, count, data} = this.state;
    // fetchData
    let loadMoreState = 'loading';
    this.setState({...this.state, loadMoreState});
    page++;
    fetchData(page, count)
      .then((_data) => {
        loadMoreState = _data.length >= count ? 'normal' : 'end';
        data = data.concat(_data);

        this.setState({...this.state, data, loadMoreState, page});
      });
  };
}
