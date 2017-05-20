## dev:

`yarn install`

`npm run bundle`

## usage:

```
import React, { Component } from 'react';
import { withPadding, withMargin, compose, createStyleHoc } from 'react-style-hoc';
```

### Compose styles with our default provided style HOCs
```
const withPaddingAndMargin = compose(
  withPadding(20),
  withMargin(50),
);

```

... or create your own style HOCS using createStyleHoc:
### Pass a string (style key). Everything here is curried, so if no default value is provided, you still have to call `withColor` with a value -> see usage in `withAllStyles`
```
const withColor = createStyleHoc('color');
```

### Pass style key & value as arguments:
```
const withSomeRandomStyleAsArguments = createStyleHoc('display', 'flex');
```

### Pass an object with default styles applied:

Note: we need that second argument. We still need figure out how to get rid of that. Should we even expose this kind of API? Thoughts are welcome.
```
const withSomeRandomStyleAsObject = createStyleHoc({
  background: 'purple',
}, '');
```

### Compose all previously made styles into one!
```
const withAllStyles = compose(
  withSomeRandomStyleAsArguments,
  withSomeRandomStyleAsObject,
  withPaddingAndMargin,
  withColor('#78a5ff'),
)
```


### Use the hoc on your stateless components:

Note: you can still provide some other default style as a prop, the HOC styles will be applied after -- so its possible to override everything. E.g. if we would have provided `{padding: '1px'}`, then  `withPadding(20)` from before would not have any effect.
```
const TestStateless = ({ children, style }) => <div style={style}>{children}</div>
const Styled = withAllStyles(TestStateless);

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




## to do:
- how shall we handle auto prefixing?
- How do we want to expose things like align-items for flexbox?
- Do we want to provide default positioning utilities?
- Should everything be a function, or do we allow more configuration as params..?
- ....

