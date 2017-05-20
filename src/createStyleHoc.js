import { curry } from 'ramda';

export const createStyleHoc = (style) => curry((value, WrappedComponentOrStyle) => {
  // style -> e.g. { margin: 10, padding: 30 } || ['margin', 'padding'] || 'margin'
  // we should support default styles, an array of style values to be added, or one string.
  console.log('qffff?');
  const styleKeys = typeof style === 'object' ? Object.keys(style) : style;
  console.log('styleKeys', styleKeys);
  let newStyleObject = {};
  if (Array.isArray(styleKeys)) {
    styleKeys.forEach(key => newStyleObject[key] = undefined);
  } else {
    newStyleObject[key] = undefined;
  }

  console.log('newStyleObject', newStyleObject);



  if (typeof WrappedComponentOrStyle !== 'function') {
    return {
      ...WrappedComponentOrStyle,
      padding: value
    };
  }

  return ({style, ...props}) => {
    return <WrappedComponentOrStyle style={{ padding: value, ...style }} { ...props} />;
  };
});
