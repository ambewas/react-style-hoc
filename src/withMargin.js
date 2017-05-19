export default (px) => (WrappedComponentOrStyle) => {
  if (typeof WrappedComponentOrStyle !== 'function') {
    return {
      ...WrappedComponentOrStyle,
      margin: px
    }
  }

  return ({style, ...props}) => {
    return <WrappedComponentOrStyle style={{ margin: px, ...style }} { ...props} />
  }
};