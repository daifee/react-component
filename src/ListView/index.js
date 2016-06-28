import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';
import ScrollView from '../ScrollView';

/**
 * ListView UI
 * @param {object} props see static propTypes
 */
export default class ListView extends Component {

  /**
   * props
   * @type {Object}
   * data: 数据
   * renderRow: 渲染每行数据，参数是 [data[index], index]
   * shouldRefreshIscroller: 是否需要 refresh iscroll，参数是 [props.data, nextProps.data]
   * renderRefresh: 渲染下拉刷新交互组件，参数是 [refreshState]
   * offsetRefresh: 下拉距离超过该值，应该改变 refreshState
   * refreshState: 下拉刷新状态
   * onNormalRefresh: 告知父组件应该将 refreshState 设置为 normal
   * onReadyRefresh: 告知父组件应该将 refreshState 设置为 ready
   * onRefresh: 告知父组件应该将 refreshState 设置为 loading
   * renderLoadMore: 渲染加载更多的交互组件
   * offsetLoadMore: ListView 底部距离视口距离小于该值，应该改变 loadMoreState
   * onLoadMore: 告知父组件应该将 loadMoreState 设置为 loading
   */
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderRow: PropTypes.func.isRequired,
    shouldRefreshIscroller: PropTypes.func.isRequired,
    renderRefresh: PropTypes.func,
    offsetRefresh: PropTypes.number,
    refreshState: PropTypes.oneOf(['none', 'normal', 'ready', 'loading']),
    onNormalRefresh: PropTypes.func,
    onReadyRefresh: PropTypes.func,
    onRefresh: PropTypes.func,
    renderLoadMore: PropTypes.func,
    offsetLoadMore: PropTypes.number,
    loadMoreState: PropTypes.oneOf(['none', 'normal', 'loading', 'end', 'fail']),
    onLoadMore: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    offsetRefresh: 60,
    offsetLoadMore: 6,
    refreshState: 'none',
    loadMoreState: 'none',
    renderRefresh: renderRefresh,
    renderLoadMore: renderLoadMore
  };

  static renderRefresh = renderRefresh;
  static renderLoadMore = renderLoadMore;

  // iscroll 实例
  iscroller = null;

  scrollToTop() {
    this.iscroller.scrollTo(0, 0, 600);
  }

  // 点击按钮刷新，需要滚动到顶部
  scrollToRefresh() {
    this.iscroller.offsetY = this.props.offsetRefresh;
    this.scrollToTop();
  }

  _refreshIscroller = () => {
    this.iscroller.refresh();
  };

  _onLoadMore = () => {
    let {loadMoreState, onLoadMore} = this.props;

    if (loadMoreState === 'loading' || loadMoreState === 'end') {
      return;
    }

    onLoadMore();
  };

  render() {
    let {
      data,
      renderRow,
      renderRefresh,
      refreshState,
      renderLoadMore,
      loadMoreState,
      className,
      shouldRefreshIscroller,
      ...others
    } = this.props;
    className = classNames('list-view', {_user: className});

    return (
      <ScrollView
        ref='scrollView'
        className={className}
        height='100%'
        width='100%'
        {...others}>
        <div className={classNames('list-view-refresh')}>
          {renderRefresh(refreshState)}
        </div>
        <List
          data={data}
          shouldRefreshIscroller={shouldRefreshIscroller}
          refreshIscroller={this._refreshIscroller}>
          <div className={classNames('list-view-list')}>
            {data.map(renderRow)}
          </div>
        </List>
        <div
          className={classNames('list-view-load-more')}
          onClick={this._onLoadMore}>
          {renderLoadMore(loadMoreState)}
        </div>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.iscroller = this.refs.scrollView.iscroller;

    this._bindLoadMore();
    this._bindRefresh();

    // 刷新 iscroller，每次 data 变化都要在 List 组件内执行这个刷新
    this._refreshIscroller();
    // 如果 refreshState=loading 需要设置 iscroller.offsetY
    this._updateOffsetY();
  }

  componentDidUpdate() {
    this._updateOffsetY();
  }

  _updateOffsetY() {
    let {offsetRefresh, refreshState} = this.props;

    this.iscroller.offsetY = refreshState === 'loading' ? offsetRefresh : 0;
  }

  _bindLoadMore() {
    let {offsetLoadMore} = this.props;
    let iscroller = this.iscroller;

    iscroller.on('scroll', () => {
      // 判断距离
      if (iscroller.maxScrollY - iscroller.y > offsetLoadMore) {
        this._onLoadMore();
      }
    });
  }

  _bindRefresh() {
    let {
      offsetRefresh,
      onReadyRefresh,
      onNormalRefresh,
      onRefresh
    } = this.props;
    let iscroller = this.iscroller;

    iscroller.on('scroll', () => {
      let {refreshState} = this.props;
      let y = iscroller.y;

      if (y < 0 || refreshState === 'loading') {
        return;
      }

      // 下拉距离超过 offsetRefresh 激活状态
      if (iscroller.y > offsetRefresh) {
        refreshState !== 'ready' && onReadyRefresh();
      } else {
        refreshState !== 'normal' && onNormalRefresh();
      }
    });

    iscroller.on('touchEnd', () => {
      let {refreshState} = this.props;

      if (refreshState !== 'ready') {
        return;
      }

      onRefresh();
    });
  }
}


// 这一切都是为了调用 this.props.refreshIscroller();
class List extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    shouldRefreshIscroller: PropTypes.func.isRequired,
    refreshIscroller: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return this.props.shouldRefreshIscroller(this.props.data, nextProps.data);
  }

  render() {
    let {children} = this.props;

    return children.length === 0 ? null : children;
  }

  componentDidUpdate() {
    let {refreshIscroller} = this.props;
    // 为了调用这个方法才抽象出 List 组件的
    refreshIscroller();
  }
}



function renderRefresh(status) {
  switch (status) {
    case 'none':
      return null;
    case 'normal':
      return (<p>下拉刷新</p>);
    case 'ready':
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
