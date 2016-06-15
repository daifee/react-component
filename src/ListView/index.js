import React, {
  PropTypes
} from 'react';
import classNames from '../utils';
// import './style';


export default function ListView(props) {
  let {
    renderRow,
    renderHeader,
    renderFooter,
    renderSeparator,
    data,
    className,
    ...others
  } = props;
  let classes = classNames('list-view', {_user: className});

  return (
    <div className={classes}>
      {renderHeader()}
      {data.map(renderRow)}
      {renderFooter()}
    </div>
  );
}

ListView.propTypes = {
  renderRow: PropTypes.func.isRequired,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func,
  data: PropTypes.array,
  className: PropTypes.string
};

ListView.defaultProps = {
  renderHeader: func,
  renderFooter: func
};

function func() {
  return null;
}
