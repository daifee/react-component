import React, {
  Component,
  PropTypes
} from 'react';
import IScroll from 'xiscroll';
import {classNames} from '../utils';
import './style';

/**
 * ScrollView UI
 * @param {object} props see static propTypes
 */
export default class ScrollView extends Component {
  /**
   * props
   * @type {Object}
   * iscrollOptions: 配置 iscroll
   * width: 定义组件宽度
   * height: 定义组件高度
   */
  static propTypes = {
    iscrollOptions: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
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
      width,
      height,
      className,
      children,
      style,
      ...others
    } = this.props;
    className = classNames('scroll-view', {_user: className});
    style = {...style, width, height};

    return (
      <div ref='wrapper' className={className} style={style} {...others}>
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
    });
  }
}


