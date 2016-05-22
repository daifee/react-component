import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';
import './style';


export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'warn']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
  };

  static defaultProps = {
    type: 'default'
  };

  handleDisabled = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
    }
  };

  render() {
    const {children, className, type, disabled, ...others} = this.props;
    const {href} = others;
    const classes = classNames('btn', {
      '_user': className,
      [`btn-${type}`]: true,
      'btn-disabled': disabled
    });
    const Tag = href ? 'a' : 'button';

    return (
      <Tag
        onTouchStart={this.handleDisabled}
        className={classes}
        {...others}>
        {children}
      </Tag>
    );
  }
}
