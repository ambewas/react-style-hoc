import { curry } from 'ramda';

const generateStyleObject = (style, value) => {
  // it's a style object with defaults
  if (typeof style === 'object' && !Array.isArray(style)) {
    return style;
  }

  // just an array with style keys
  if (Array.isArray(style)) {
    return Object.assign(...style.map(key => ({ [key]: value })));
  }

  // a style key string
  return Object.assign({ [style]: value });
};



export const createStyleHoc = curry((style, value, WrappedComponentOrStyle) => {
  // style -> e.g. { margin: 10, padding: 30 } || ['margin', 'padding'] || 'margin'
  // we should support default styles, an array of style values to be added, or one string.

  let newStyleObject = generateStyleObject(style, value);

  /**
  |--------------------------------------------------
  | how can we detect is a component has been passed through,
  | and otherwise simply generate a style object? -- useful for
  | composing without having to depend on react.
  |--------------------------------------------------
  */

  const wrappedComponent = ({ style, ...props }) => {
    return <WrappedComponentOrStyle style={{ ...newStyleObject, ...style }} { ...props} />;
  };

  return wrappedComponent;
});
