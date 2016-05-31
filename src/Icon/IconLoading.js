import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

const count = 12;
const opacityUnit = 1 / (count + 13);


export default function IconLoading(props) {
  const {className, scale, ...others} = props;
  let classes = classNames('icon-loading', {_user: className});
  let leafs = [];
  let cl, rotate, style;

  for (let i = 0; i < count; i++) {
    cl = classNames('icon-loading-leaf', `icon-loading-leaf-${i}`);
    rotate = i * 30;
    style = {
      transform: (`rotate(${rotate}deg)`),
      opacity: (1 - opacityUnit * i)
    };
    leafs.push((<i key={i} className={cl} style={style} />));
  }

  //
  style = {
    transform: (`scale(${scale})`)
  };

  //
  return (
    <div className={classes} style={style} {...others}>{leafs}</div>
  );
}

IconLoading.propTypes = {
  scale: PropTypes.number,
  className: PropTypes.string
};
IconLoading.defaultProps = {
  scale: 1
};


