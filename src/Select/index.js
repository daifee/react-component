import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import IScroll from 'xiscroll';
import './style';

const height = 34;

/**
 * options
 * selectedIndex
 */
export default class Select extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    iscrollOptions: PropTypes.object
  };

  static defaultProps = {
    selectedIndex: 0,
    style: {},
    iscrollOptions: {}
  };

  iscroller = null;


  render() {
    let {options, className, style, ...others} = this.props;
    let classes = classNames('select', {_user: className});
    let optionStyle = {
      height: (height + 'px'),
      lineHeight: (height + 'px')
    };
    let maskStyle = {height: (height * 3 + 'px')};
    style = {...style, height: (height * 7 + 'px')};

    options = ['', '', ''].concat(options);
    options = options.concat(['', '', '']);

    return (
      <div ref='wrapper' className={classes} style={style} {...others}>
        <ul className={classNames('select-options')}>
          {options.map((option, index) => {
            let name = typeof option === 'object' ? option.name : option;
            let key = index + '' + name;

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
      onChange,
      selectedIndex
    } = this.props;
    let {wrapper} = this.refs;
    this.iscroller = new IScroll(wrapper, {
      probeType: 2,
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


    // 定位到指定的 selectIndex
    this.iscroller.scrollTo(0, (-selectedIndex * height));

    wrapper.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
