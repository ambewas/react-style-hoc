import { curry } from 'ramda';

function isStateless(Component) {
  console.log('Component.prototype',Component.prototype);
  return Component.prototype ? Component.prototype.name : false;
}

const generateStyleObject = (style) => {
  // it's a style object with defaults
  if (typeof style === 'object' && !Array.isArray(style)) {
    return style;
  }

  // just an array with style keys
  if (Array.isArray(style)) {
    return Object.assign(...style.map(key => ({ [key]: 30 })));
  }

  // a style key string
  return Object.assign({ [style]: 30 });
};



export const createStyleHoc = curry((style, value, WrappedComponentOrStyle) => {
  // style -> e.g. { margin: 10, padding: 30 } || ['margin', 'padding'] || 'margin'
  // we should support default styles, an array of style values to be added, or one string.

  console.log('value',value);
  let newStyleObject = generateStyleObject(style);
  console.log('newStyleObject', newStyleObject);
  console.log('WrappedComponentOrStyle',WrappedComponentOrStyle);
  // if (!isStateless(WrappedComponentOrStyle)) {
  //   console.log('style, not a component..');
  //   return {
  //     ...WrappedComponentOrStyle,
  //     ...newStyleObject,
  //   };
  // }

  return ({ style, ...props }) => {
    return <WrappedComponentOrStyle style={{ ...newStyleObject, ...style }} { ...props} />;
  };
});
