import React, {
	PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * Cell UI
 * @param {object} props see Cell.propTypes
 */
export default function Cell(props) {
  let {children, className, href, access, arrow, ...others} = props;
  className = classNames('cell', {
    'cell-access': access,
    'cell-arrow': arrow,
    _user: className
  });
  let Component = href ? 'a' : props.component;

  return (
    <Component {...others} href={href} className={className}>
      {children}
    </Component>
  );
}

/**
 * Cell 的 props
 * @type {Object}
 * component: 渲染的组件
 * href: 超链接
 * access: 是否有交互状态
 * arrow: 是否有箭头
 *
 */
Cell.propTypes = {
  component: PropTypes.string,
  href: PropTypes.string,
  access: PropTypes.bool,
  arrow: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

Cell.defaultProps = {
  component: 'dev'
};
