import React, {
  PropTypes
} from 'react';


export default function IconAttention(props) {
  let {size} = props;
  let style = {
    width: size,
    height: size,
    fontSize: size
  };

  return (<i className='zzcui-attention' style={style}></i>);
}

IconAttention.propTypes = {
  size: PropTypes.string
};
