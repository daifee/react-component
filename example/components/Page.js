import React, {
  Component,
  PropTypes
} from 'react';

import './page.scss';

export default class Page extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array
    ]).isRequired
  };

  render() {
    const {title, subTitle, children} = this.props;

    return (
      <div className='page'>
        <header className='page-header'>
          <h1>{title}</h1>
          {subTitle ? (<p>{subTitle}</p>) : null}
        </header>
        <div className='page-body'>{children}</div>
      </div>
    );
  }
}
