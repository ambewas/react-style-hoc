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

## install & dev:

`yarn install`

`npm run bundle`

## usage:

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withPadding, withMargin, compose, curry } from 'react-style-hoc';

const composeStyles = compose(
  withMargin(60),
  withPadding(40)
);

const TestStateless = ({ children, style }) => <div style={style}>{children}</div>

// create a styled component
const Styled = composeStyles(TestStateless);


//... OR just check what styles have been generated with your composed function:
const styles = composeStyles();
console.log('composed styles: ', styles);

class App extends Component {
  render() {
    return (
      <div className="App">
        hello
        <Styled style={{border: '1px solid red'}}>
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

## result in DOM

The rendered result of the `<Styled />` component is then:

```
<div style="padding: 40px; margin: 60px; border: 1px solid red;">
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
  <div>test</div>
</div>
```




## to do:
- How do we want to expose things like align-items for flexbox?
- Do we want to provide default positioning utilities?
- Should everything be a function, or do we allow more configuration as params..?
- ....

