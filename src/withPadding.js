import { curry } from 'ramda';

export const withPadding = curry((value, WrappedComponentOrStyle) => {
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
