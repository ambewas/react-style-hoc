## A short description of what this library will become

Abstract outline:

This library will provide other composable functions you can use to build up positioning styles. Eg:


```
BaseComponent = ({style}) => <div style={style}>hello world</div>

withStyle = compose(
  style,
  withPadding(30), // padding: 30px;
  withMargin(40), // margin: 40px;
  isFlexParent(), // display: flex;
)

MyComponent = withStyle(BaseComponent);

-> <div style = {padding: 30, margin: 40, display: 'flex'}>hello world</div>

```


## to decide:
- How do we want to expose things like align-items for flexbox?
- Do we want to provide default positioning utilities?
- Should everything be a function, or do we allow more configuration as params..?






master branch:

usage:
```

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { style, withPadding, withMargin, compose, curry } from 'react-style-hoc';


const TestStateless = ({ style, children }) => <div style={style}>{children}</div>

const withPaddingAndMargin = compose(
  style,
  withPadding(40),
  withMargin(60)
)

const Styled = withPaddingAndMargin(TestStateless);


class App extends Component {
  render() {
    return (
      <div className="App">
        hello
        <Styled>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </Styled>
      </div>
    );
  }
}

export default App;
```


hof alternative usage:
