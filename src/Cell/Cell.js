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
    tagName: PropTypes.string,
    href: PropTypes.string,
    access: PropTypes.bool,
    arrow: PropTypes.bool
  };

	render() {
    const {children, className, tagName, access, arrow, ...others} = this.props;
    const {href} = others;
    const Tag = href ? 'a' : (tagName ? tagName : 'div');
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
