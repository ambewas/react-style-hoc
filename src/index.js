import React, { cloneElement } from 'react';
import withPadding from './withPadding.js';
import withMargin from './withMargin.js';

import { compose } from 'ramda';


const style = Component => style => {
  console.log('style',style);
  return (props) => <Component {...props}/>
};

export default {
  style,
  withPadding,
  withMargin,
  compose
};
