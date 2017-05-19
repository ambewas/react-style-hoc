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

