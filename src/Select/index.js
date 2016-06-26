import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import IScroll from 'xiscroll';
import './style';

const height = 34;
const maskStyle = {height: (height * 3 + 'px')};
const optionStyle = {
  height: (height + 'px'),
  lineHeight: (height + 'px')
};

/**
 * Select UI
 * @param {object} props see static propTypes
 */
export default class Select extends Component {
  /**
   * props
   * @type {Object}
   * options: 选项
   * selectedIndex: 选中项的索引
   * onChange: 监听 selectedIndex 改变，参数是 [selectedIndex]
   * iscrollOptions: 配置 iscroll
   */
  static propTypes = {
    options: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number,
    onChange: PropTypes.func,
    iscrollOptions: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    selectedIndex: 0
  };

  // iscroll 实例
  iscroller = null;


  render() {
    let {options, className, style, ...others} = this.props;

    className = classNames('select', {_user: className});
    style = {...style, height: (height * 7 + 'px')};
    // fill
    options = ['', '', ''].concat(options).concat(['', '', '']);

    return (
      <div ref='wrapper' className={className} style={style} {...others}>
        <ul className={classNames('select-options')}>
          {options.map((option, index) => {
            let name = typeof option === 'object' ? option.name : option;
            let key = index + '@-@' + name;

            return (<li key={key} style={optionStyle}>{name}</li>);
          })}
        </ul>

        <div style={maskStyle} className={classNames('select-mask-top')}></div>
        <div style={maskStyle} className={classNames('select-mask-bottom')}></div>
      </div>
    );
  }

  componentDidMount() {
    let {
      iscrollOptions,
      onChange
    } = this.props;
    let {wrapper} = this.refs;
    // fuck a bug
    setTimeout(() => {
      this.iscroller = new IScroll(wrapper, {
        probeType: 2,  // 默认值
        ...iscrollOptions
      });

      this.iscroller.on('scrollEnd', () => {
        let index = Math.abs(this.iscroller.y / height);
        onChange && onChange(index);
      });

      // 通过 hookNewY 修改滚动位置
      this.iscroller.hookNewY = (newY) => {
        // Math.ceil(-8.74) = -8
        // 所以已经 -1 了
        let index = Math.ceil(newY / height);

        if (Math.abs(this.iscroller.distY) > (height / 2)) {
          if (this.iscroller.directionY === 1) {
            index -= 1;
          }
        }

        newY = index * height;

        return newY;
      };

      this.resetPosition();

      // 阻止默认事件
      wrapper.addEventListener('touchmove', (e) => {
        e.preventDefault();
      });
    }, 0);
  }

  shouldComponentUpdate(nextProps) {
    return true;
  }

  componentDidUpdate() {
    this.iscroller.refresh();
    this.resetPosition();
  }

  resetPosition() {
    let {selectedIndex} = this.props;
    // 定位到指定的 selectIndex
    this.iscroller.scrollTo(0, (-selectedIndex * height));
  }
}
