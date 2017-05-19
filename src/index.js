import React, { cloneElement } from 'react';
import withPadding from './withPadding.js';
import withMargin from './withMargin.js';

import { compose, curry } from 'ramda';


const style = (computedStyle, c) => props => {
  console.log('computedStyle in style', computedStyle);
  console.log('c', c);
  console.log('computedStyle.component', computedStyle.component);
  const MyComponent = computedStyle.component;
  console.log('computedStyle.style', computedStyle.style);
  console.log('props',props);
  return <MyComponent style={computedStyle.style} {...props}/>;
};

export default {
  style,
  withPadding,
  withMargin,
  compose,
  curry
};
