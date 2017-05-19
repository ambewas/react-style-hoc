export default (px) => (WrappedComponentOrStyle) => {
  if (typeof WrappedComponentOrStyle !== 'function') {
    return {
      ...WrappedComponentOrStyle,
      padding: px
    }
  }

  return ({style, ...props}) => {
    return <WrappedComponentOrStyle style={{ padding: px, ...style }} { ...props} />
  }
};
