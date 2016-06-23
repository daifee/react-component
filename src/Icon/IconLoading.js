import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * IconLoading UI
 * @param {object} props see IconLoading.propTypes
 */
export default function IconLoading(props) {
  let {className, scale, className, style, ...others} = props;
  let leafs = createLeafs();
  className = classNames('icon-loading', {_user: className});
  style = {
    ...style,
    transform: (`scale(${scale})`)
  };

  return (
    <div className={className} style={style} {...others}>{leafs}</div>
  );
}

/**
 * props
 * @type {Object}
 * scale: 缩放，影响视图大小
 */
IconLoading.propTypes = {
  scale: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
};

IconLoading.defaultProps = {
  scale: 1
};

const count = 12;
const opacityUnit = 1 / (count + 13);

function createLeafs() {
  let leafs = [];
  let className, rotate, style;

  for (let i = 0; i < count; i++) {
    className = classNames('icon-loading-leaf', `icon-loading-leaf-${i}`);
    rotate = i * 30;
    style = {
      transform: (`rotate(${rotate}deg)`),
      opacity: (1 - opacityUnit * i)
    };
    leafs.push((<i key={i} className={className} style={style} />));
  }

  return leafs;
}



