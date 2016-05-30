import classNames from './classNames';

/**
 * [getApiContainer description]
 * @return {[type]} [description]
 */
export default function getApiContainer() {
  let div = document.createElement('div');
  div.className = classNames('api-container');
  document.body.appendChild(div);

  return div;
}
