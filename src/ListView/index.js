import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';
import ScrollView from '../ScrollView';


/**
 * 一个内置“下拉刷新”和“加载更多”的 ListView。**开箱即用**
 * 本组件不是 stateless component:
 *   * refresh “下拉刷新”状态
 *   * loadMore “加载更多”状态
 * @param {array} data 列表数据
 * @param {function} renderRow 渲染列表的每一行，参数为 (data[index], index)
 * renderRow(data[index], index) @return PropTypes.node
 * @param {function} renderRefresh 渲染 UI（下拉刷新），参数是 `refresh`
 * renderRefresh(refresh) @return PropTypes.node
 * @param {function} renderLoadMore 渲染 UI（加载更多），参数是 `loadMore`
 * @param {function} loadMoreAction 加载更多的动作（数据请求）。
 * @param {function} refreshAction 刷新的动作（数据请求）。
 * @param {string} className 自定义样式
 * @param {number} offsetRefresh 下拉超出 npx 可激活刷新
 * @param {number} offsetLoadMore 上拉超出 npx 执行 `loadMoreAction`
 *
 * @example
 * 产看 example/ListViewPage
 */
export default class ListView extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderRow: PropTypes.func.isRequired,
    renderRefresh: PropTypes.func,
    renderLoadMore: PropTypes.func,
    loadMoreAction: PropTypes.func,
    refreshAction: PropTypes.func,
    className: PropTypes.string,
    offsetRefresh: PropTypes.number,
    offsetLoadMore: PropTypes.number
  };

  static defaultProps = {
    offsetRefresh: 60,
    offsetLoadMore: 10,
    renderRefresh: renderRefresh,
    renderLoadMore: renderLoadMore
  };

  state = {
    // normal | active | loading
    refresh: 'normal',
    // none | normal | loading | end | fail
    loadMore: 'none'
  };

  // IScroller 实例
  iscroller = null;

  onLoadMore = () => {
    this._loadMoreAction();
  };

  render() {
    let {refresh, loadMore} = this.state;
    let {
      data,
      renderRow,
      renderRefresh,
      renderLoadMore,
      className,
      onLoadMore,
      ...others
    } = this.props;
    let classes = classNames('list-view', {_user: className});

    return (
      <ScrollView
        ref='scrollView'
        className={classes}
        height='100%'
        width='100%'
        {...others}>
        <div className={classNames('list-view-refresh')}>
          {renderRefresh(refresh)}
        </div>
        {data.map(renderRow)}
        <div
          className={classNames('list-view-load-more')}
          onClick={this.onLoadMore}>
          {renderLoadMore(loadMore)}
        </div>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.iscroller = this.refs.scrollView.iscroller;

    this._handlerRefresh();
    this._handlerLoadMore();
  }

  // 包装 loadMoreAction
  // 避免用户连续点击、下拉造成重复请求
  _loadMoreAction() {
    let {loadMore} = this.state;
    let {loadMoreAction} = this.props;
    if (loadMore === 'normal' || loadMore === 'fail') {
      loadMoreAction();
    }
  }

  /**
   * 包装 refreshAction 避免重复请求
   * @param  {boolean} ignore 忽略 active 和 loading 状态
   * @return {[type]}        [description]
   */
  _refreshAction(ignore) {
    let {refreshAction} = this.props;
    let {refresh} = this.state;

    if (ignore || refresh === 'active' || refresh === 'loading') {
      this.changeRefresh('loading');
      refreshAction();
    }
  }

  // 绑定“下拉刷新”的交互事件
  _handlerRefresh() {
    let {offsetRefresh} = this.props;

    this.iscroller.on('scroll', () => {
      let {refresh} = this.state;
      let y = this.iscroller.y;

      if (refresh === 'loading' || y < 0) {
        return;
      }

      // 下拉距离超过 offsetRefresh 激活状态
      if (this.iscroller.y > offsetRefresh) {
        this.changeRefresh('active');
      } else {
        this.changeRefresh('normal');
      }
    });

    this.iscroller.on('touchEnd', () => {
      this._refreshAction();
    });
  }

  // 绑定“上拉加载更多”的交互事件
  _handlerLoadMore() {
    let {offsetLoadMore} = this.props;

    this.iscroller.on('scroll', () => {
      // 判断距离
      if (this.iscroller.maxScrollY - this.iscroller.y > offsetLoadMore) {
        this._loadMoreAction();
      }
    });
  }

  /**
   * 改变“下拉刷新”组件的状态
   * @param  {string} refresh 同 this.state.refresh
   * @return {[type]}         [description]
   */
  changeRefresh(refresh) {
    let nextState = {...this.state, refresh};
    this.setState(nextState);

    if (this.iscroller) {
      let {offsetRefresh} = this.props;
      this.iscroller.offsetY = refresh === 'loading' ? offsetRefresh : 0;
    }
  }
  /**
   * 执行刷新，`changeRefresh('loading')` 的别名
   * @return {[type]} [description]
   */
  refreshing() {
    this.changeRefresh('loading');
  }
  /**
   * 完成刷新，`changeRefresh('normal')` 的别名
   * @return {[type]} [description]
   */
  refreshed() {
    this.changeRefresh('normal');
    this.iscroller.scrollTo(0, 0, 600);
  }


  /**
   * 改变“加载更多”组件的状态
   * @param  {string} loadMore 同 this.state.loadMore
   * @return {[type]}          [description]
   */
  changeLoadMore(loadMore) {
    let nextState = {...this.state, loadMore};
    this.setState(nextState);
  }
  /**
   * 成功加载更多，`changeLoadMore('normal')` 的别名
   * @return {[type]} [description]
   */
  succeedLoadMore() {
    this.changeLoadMore('normal');
  }
  /**
   * 已加载全部内容，`changeLoadMore('end')` 的别名
   * @return {[type]} [description]
   */
  noMore() {
    this.changeLoadMore('end')
  }
  /**
   * 加载更多，遇到失败，`changeLoadMore('fail')` 的别名
   * @return {[type]} [description]
   */
  loadMoreFailed() {
    this.changeLoadMore('fail')
  }
  /**
   * 正在加载更多，`changeLoadMore('loading')` 的别名
   * @return {[type]} [description]
   */
  loadingMore() {
    this.changeLoadMore('loading');
  }



  /**
   * 刷新 IScroll 实例
   * 当 ListView 的内容发生变化，应该执行改方法
   * @return {[type]} [description]
   */
  refreshIscroller() {
    this.iscroller.refresh();
  }

  /**
   * 自定义刷新按钮可以调用本方法
   */
  refresh() {
    let {refresh} = this.state;
    if (refresh === 'loading') {
      return;
    }

    this._refreshAction(true);
    this.iscroller.scrollTo(0, 0, 600);
  }
}

function renderRefresh(status) {
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


function renderLoadMore(status) {
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

