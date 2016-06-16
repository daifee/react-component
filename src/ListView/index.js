/**
 * ListView 提供以下功能，方便使用（开箱即用）：
 *  * `renderRow()` 渲染每一行
 *  * “下拉刷新”指示器
 *  * “加载更多”指示器
 */

import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';
import ScrollView from '../ScrollView';



export default class ListView extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderRow: PropTypes.func.isRequired,
    onLoadMore: PropTypes.func,
    onRefresh: PropTypes.func,
    className: PropTypes.string
  };

  state = {
    // normal | active | loading
    refresh: 'normal',
    // none | normal | loading | end | fail
    loadMore: 'none'
  };

  // IScroller 实例
  iscroller = null;
  offsetTop = 50;

  render() {
    let {refresh, loadMore} = this.state;
    let {data, renderRow, className, onLoadMore, ...others} = this.props;
    let classes = classNames('list-view', {_user: className});

    return (
      <ScrollView
        ref='scrollView'
        className={classes}
        height='100%'
        width='100%'
        {...others}>
        <div className={classNames('list-view-refresh')}>
          <Refresh status={refresh} />
        </div>
        {data.map(renderRow)}
        <div
          className={classNames('list-view-load-more')}
          onClick={this.onLoadMore}>
          <LoadMore status={loadMore} />
        </div>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.iscroller = this.refs.scrollView.iscroller;

    this._handlerRefresh();
    this._handlerLoadMore();
  }

  _handlerRefresh() {
    let {onRefresh} = this.props;

    this.iscroller.on('scroll', () => {
      let {refresh} = this.state;
      let y = this.iscroller.y;

      if (refresh === 'loading' || y < 0) {
        return;
      }

      if (this.iscroller.y > this.offsetTop) {
        this.changeRefresh('active');
      } else {
        this.changeRefresh('normal');
      }
    });

    this.iscroller.on('touchEnd', () => {
      let {refresh} = this.state;

      if (refresh === 'active') {
        this.changeRefresh('loading');
        onRefresh();
      }
    });
  }

  _handlerLoadMore() {
    let {onLoadMore} = this.props;

    this.iscroller.on('scroll', () => {
      let {loadMore} = this.state;

      if (loadMore !== 'normal') {
        return;
      }

      if (Math.abs(this.iscroller.y - this.iscroller.maxScrollY) < 10) {
        onLoadMore();
      }
    });
  }

  changeRefresh(refresh) {
    let nextState = {...this.state, refresh};
    this.setState(nextState);

    if (this.iscroller) {
      this.iscroller.offsetY = refresh === 'loading' ? this.offsetTop : 0;
    }

  }

  changeLoadMore(loadMore) {
    let nextState = {...this.state, loadMore};
    this.setState(nextState);
  }

  onLoadMore = () => {
    let {loadMore} = this.state;
    let {onLoadMore} = this.props;
    if (loadMore === 'normal' || loadMore === 'fail') {
      onLoadMore();
    }
  };

  /**
   * 加载数据的动作在父组件，所以由父组件改变状态
   */
  refresh() {
    this.changeRefresh('loading');
    this.iscroller.scrollTo(0, 0, 600);
  }

  refreshed() {
    this.changeRefresh('normal');
    this.iscroller.scrollTo(0, 0, 600);
  }

  succeedLoadMore() {
    this.changeLoadMore('normal');
  }

  noMore() {
    this.changeLoadMore('end')
  }

  loadMoreFailed() {
    this.changeLoadMore('fail')
  }

  loadingMore() {
    this.changeLoadMore('loading');
  }
}

function Refresh(props) {
  let {status} = props;

  switch (status) {
    case 'normal':
      return (<p>下拉刷新</p>);
    case 'active':
      return (<p>松手即可刷新</p>);
    case 'loading':
      return (<p>加载中...</p>);
  }

  return null;
}


function LoadMore(props) {
  let {status} = props;

  switch (status) {
    case 'none':
      return null;
    case 'normal':
      return (<p>点击，加载更多</p>);
    case 'loading':
      return (<p>加载中...</p>);
    case 'end':
      return (<p>没有数据了</p>);
    case 'fail':
      return (<p>加载失败，请点击重新加载</p>);
  }

  return null;
}

