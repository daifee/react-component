import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';
import ScrollView from '../ScrollView';


/**
 * ListView 提供“下拉刷新”和“加载更多”功能的列表
 * @param {array} data 列表内容数据
 * @param {function} renderRow 返回每一行的视图，参数是：`data[index], index`
 * @param {function} shouldRefreshIscroller 根据 data 和 nextData 判断是否更新 iscroller。
 * @param {function} renderRefresh “下拉刷新”的交互视图，参数是：`refreshState`
 * @param {number} offsetRefresh 下拉距离超过该值，且 `refreshState === 'normal'`，会
 * 触发 `onReadyRefresh()`
 * @param {string} refreshState “下拉刷新”的状态，除了用于渲染 `renderRefresh()`，
 * 内部也用于控制触发 `onNormalRefresh()` `onReadyRefresh()` `onRefresh`
 * 其值只能是：`none | normal | ready | loading`
 * @param {function} onNormalRefresh 此时应该将 `refreshState` 设置为 `normal`
 * @param {function} onReadyRefresh 此时应该将 `refreshState` 设置为 `ready`
 * @param {function} onRefresh 此时应该将 `refreshState` 设置为 `loading`
 * @param {function} renderLoadMore “加载更多”的交互视图，参数是：`loadMoreState`
 * @param {number} offsetLoadMore 最后一条数据距离底部小于该值，
 * 且 `loadMoreState !== (loading | end)` 会触发 `onLoadMore()`
 * @param {string} loadMoreState “加载更多”的状态，除了用于渲染，还用于内部控制触发 `onLoadMore`
 * @param {function} onLoadMore 此时应该加载“更多数据”
 * @param {string} className 自定义 class
 *
 */
export default class ListView extends Component {
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

  // iscroll 实例
  iscroller = null;

  scrollToTop() {
    this.iscroller.scrollTo(0, 0, 600);
  }

  _refreshIscroller = () => {
    this.iscroller.refresh();
  };

  _onLoadMore = () => {
    let {loadMoreState, onLoadMore} = this.props;

    console.log(1);

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
    let classes = classNames('list-view', {_user: className});

    // TODO delete 多余的 props

    return (
      <ScrollView
        ref='scrollView'
        className={classes}
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
          ref='more'
          className={classNames('list-view-load-more')}
          onClick={this._onLoadMore}>
          {renderLoadMore(loadMoreState)}
        </div>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.iscroller = this.refs.scrollView.iscroller;

    this.refs.more.onclick = function () {
      console.warn('click more');
    }

    this._bindLoadMore();
    this._bindRefresh();

    this._refreshIscroller();
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
    // 为了调用这个方法才抽象出 List 组件的
    this.props.refreshIscroller();
    console.warn('update');
  }
}

function EmtryContainer() {

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
