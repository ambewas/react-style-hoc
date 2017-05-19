import { curry } from 'ramda';
import React, { Component } from 'react';


export default (px) => (WrappedComponent) => {
  return ({style, ...props}) => {
    return <WrappedComponent style={{ margin: 60, ...style }} { ...props} />
  }
};