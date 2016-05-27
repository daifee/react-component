import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style';

export default class Dialog extends Component {
  static propTypes = {
    show: PropTypes.bool,
    duration: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    buttons: PropTypes.array
  };

  render() {

    //
    return (
      <div></div>
    );
  }
}
