import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';


export default function IconAttention(props) {
  const {size, className, ...others} = props;
  let classes = classNames('icon-attention', {'_user': className});
  let style = {
    height: size,
    width: size,
    fontSize: size
  };

  return (
    <i className={classes} style={style} {...others} />
  );
}

IconAttention.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string
};

IconAttention.defaultProps = {
  size: '40px'
};
