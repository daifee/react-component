import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default function IconCheck(props) {
  const {size, className, ...others} = props;
  let classes = classNames('icon-check', {'_user': className});
  let style = {
    height: size,
    width: size,
    fontSize: size
  };

  return (
    <i className={classes} style={style} {...others} />
  );
}


IconCheck.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string
};

IconCheck.defaultProps = {
  size: '40px'
};
