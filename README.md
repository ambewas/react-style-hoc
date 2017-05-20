# Installation:

`yarn add react-style-hoc`

or if you prefer `npm`:

`npm install --save react-style-hoc`


# [motivation] Why would I want to compose styles with functions...?!

Great question!

The purpose of this repository is to allow you to declare styles as functions, that are composable, and return a react Higher Order Component.

The direct benefit of which is that it becomes possible to create reusable HOCs for styling.

A simple example would be to define a flex centerer, which would look something like this:

```
const MyComponent = ({style}) => <div style={style}>unstyled</div>

const isFlexBox = createStyleHoc('display', 'flex');
const centersChidren = createStyleHoc({alignItems: 'center', justifyContent: 'center'}, '');

const isFlexCenterer = compose(
  isFlexBox,
  centersChildren
)
```

when using `isFlexCenterer` on it's own as a wrapper around `MyComponent`, like this:

```
export isFlexCenterer(MyComponent);
```

tghe `style` prop of `MyComponent` then looks like this:

```
{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

```

Of course, the power of composing styles only becomes fully clear once you start composing different helpers.

You can compare this to using `mixings` in a CSS preprocessor such as SASS or LESS.

```
const isFullyStyled = compose(
  withMargin(20),
  withPadding(40),
  isFlexCenterer,
  withColor,
  ....
)
```


This is a very young library, and contributions very welcome!

# Development:

`yarn install`

`npm run watch:js`

run tests: `npm test`

# Example:
run [our example app](https://github.com/ambewas/react-style-hoc/tree/master/examples/test-app)

# How to use:

```
import React, { Component } from 'react';
import { withPadding, withMargin, compose, createStyleHoc } from 'react-style-hoc';
```

## Compose styles with our default provided style HOCs
```
const withPaddingAndMargin = compose(
  withPadding(20),
  withMargin(50),
);

```

## ... or create your own style HOCS using `createStyleHoc`:
Pass a string (style key). Everything here is curried, so if no default value is provided, you still have to call `withColor` with a value -> see usage in `withAllStyles`
```
const withColor = createStyleHoc('color');
```

## Pass style key & value as arguments:
```
const withSomeRandomStyleAsArguments = createStyleHoc('display', 'flex');
```

## Pass an object with default styles applied:

Note: we need that second argument. We still need figure out how to get rid of that. Should we even expose this kind of API? Thoughts are welcome.
```
const withSomeRandomStyleAsObject = createStyleHoc({
  background: 'purple',
}, '');
```

## Compose all previously made styles into one!
```
const withAllStyles = compose(
  withSomeRandomStyleAsArguments,
  withSomeRandomStyleAsObject,
  withPaddingAndMargin,
  withColor('#78a5ff'),
)
```


## Use the hoc on your stateless components:

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

# Contributing

Please see our guidelines in `CONTRIBUTING.md` if you want to contribute something to this library.

# License

MIT Licensed. Copyright (c) Kevin Decock 2017.