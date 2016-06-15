import React, {
  Component,
  PropTypes
} from 'react';
import IScroll from 'xiscroll';
import {classNames} from '../utils';
import './style';

/**
 * ScrollView 将 IScroll 包装为 React Component
 * `instance.iscroller` 是 `IScroll` 实例
 * @param {object} props 传入组件的 props
 * @property {string} props.className 自定义 class
 * @property {PtopTypes.node} props.children 子组件
 * @property {object} props.iscrollOptions IScroll 的配置
 * @property {string} props.width 组件的宽度，默认：100%
 * @property {string} props.height 组件的高度，默认：300px
 * @property {object} props.style 样式，在这里定义的 width, height 会被上面属性覆盖
 */
export default class ScrollView extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    iscrollOptions: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    width: '100%',
    height: '300px'
  };

  // IScroll 实例
  iscroller = null;

  render() {
    let {
      className,
      children,
      width,
      height,
      style,
      ...others
    } = this.props;
    let classes = classNames('scroll-view', {_user: className});
    style = {...style, width, height};

    return (
      <div ref='wrapper' className={classes} style={style} {...others}>
        <div className={classNames('scroll-view-scroller')}>
          {children}
        </div>
      </div>
    );
  }

  componentDidMount() {
    let {
      iscrollOptions
    } = this.props;
    let {wrapper} = this.refs;
    this.iscroller = new IScroll(wrapper, {
      probeType: 2,
      mouseWheel: true,
      ...iscrollOptions
    });

    wrapper.addEventListener('touchmove', (e) => {
      e.preventDefault();
    })
  }
}


