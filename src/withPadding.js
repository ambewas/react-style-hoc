import { curry } from 'ramda';
import React, { Component } from 'react';


export default (px) => (WrappedComponent) => {
  return ({style, ...props}) => {
    return <WrappedComponent style={{ padding: 60, ...style }} { ...props} />
  }
};