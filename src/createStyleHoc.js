import React, { Component } from 'react'; // eslint-disable-line
import { curry } from 'ramda';
import { generateStyleObject } from './helpers/index.js';

const isClassComponent = Component => Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object'

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

  if (isClassComponent(WrappedComponentOrStyle)) {
    console.log('hello');
    return class NewComponent extends Component {
      render() {
        const { style, ...props } = this.props;
        return <WrappedComponentOrStyle style={{ ...newStyleObject, ...style }} { ...props} />;
      }
    };
  }

  return ({ style, ...props }) => {
    return <WrappedComponentOrStyle style={{ ...newStyleObject, ...style }} { ...props} />;
  };
});
