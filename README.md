## install & dev:

`yarn install`

`npm run bundle`

## usage:

```
import React, { Component } from 'react';
import { withPadding, withMargin, compose, createStyleHoc } from 'react-style-hoc';

const withPaddingAndMargin = compose(
  withPadding(20),
  withMargin(50),
);


// you can create your own style HOCs
const withColor = createStyleHoc('color');

const withColorPaddingMargin = compose(
  withPaddingAndMargin,
  withColor('#78a5ff'),
)

const TestStateless = ({ children, style }) => <div style={style}>{children}</div>
const Styled = withColorPaddingMargin(TestStateless);

class App extends Component {
  render() {
    return (
      <div className="App">
        hello
        <Styled style={{border: '1px solid red'}}>
          <div>with padding, composed with margin</div>
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

