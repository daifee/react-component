import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';


/**
 * Button UI
 * @param {object} props see Button.propTypes
 */
export default function Button(props) {
  let {type, disabled, href, children, className, ...others} = props;
  className = classNames('btn', {
    '_user': className,
    [`btn-${type}`]: true,
    'btn-disabled': disabled
  });
  let Component = href ? 'a' : 'button';

  return (
    <Component
      className={className}
      disabled={disabled}
      href={href}
      {...others}>
      {children}
    </Component>
  );
}

/**
 * Button 的 props
 * @type {Object}
 * type: 按钮类型
 * disable: 是否禁用？如果定义了 href 属性，此属性无效
 * href: 超链接，使用 <a />
 */
Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'warn']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

Button.defaultProps = {
  type: 'default'
};

