// 给 ReactCSSTransitionGroup 用

export default function ChildContainer(props) {
  return props.children[0] ? props.children[0] : null;
}
