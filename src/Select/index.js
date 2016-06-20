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
    className: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    selectedIndex: 0
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

    return (
      <div ref='wrapper' className={classes} style={style}>
        <ul className={classNames('select-options')}>
          {options.map((option) => {
            return (<li key={option} style={optionStyle}>{option}</li>);
          })}
        </ul>

        <div style={maskStyle} className={classNames('select-mask-top')}></div>
        <div style={maskStyle} className={classNames('select-mask-bottom')}></div>
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
      mouseWheel: true
    });

    wrapper.addEventListener('touchmove', (e) => {
      e.preventDefault();
    });
  }
}
