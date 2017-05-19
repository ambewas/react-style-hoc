import { curry } from 'ramda';

export default curry((px) => (style) => {
  return ({
    ...style,
    margin: px
  })
});