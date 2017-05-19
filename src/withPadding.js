import { curry } from 'ramda';


export default curry((px) => (componentObject) => {
  const component = componentObject.component || componentObject;
  const style = componentObject.style;
  return {
    style: {
      ...style,
      padding: px,
    },
    component: component
  };
});