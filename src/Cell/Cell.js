import React, {
	Component,
	PropTypes
} from 'react';
import classNames from '../classNames';

export default class Cell extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    className: PropTypes.string,
    component: PropTypes.string,
    href: PropTypes.string,
    access: PropTypes.bool,
    arrow: PropTypes.bool
  };

	render() {
    const {children, className, component, access, arrow, ...others} = this.props;
    const {href} = others;
    const Tag = href ? 'a' : (component ? component : 'div');
    const classes = classNames('cell', {
      'cell-access': access,
      'cell-arrow': arrow,
      _user: className
    });

    return (
      <Tag {...others} className={classes}>{children}</Tag>
    );
	}
};
