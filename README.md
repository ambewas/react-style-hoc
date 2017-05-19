## A short description of what this library will become

Abstract outline:

This HOC exposes SOME styles as props to your component - it is concerned with everything outside of the component box.
So: only "positioning" styles are exposed as props.

Props that we will expose:

- padding
- margin
- display
- flexParent
- flexElement
- top / bottom / left / right

All of these css properties should be prefixed automatically.



In addition, this library will provide other composable functions you can use to build up positioning styles. Eg:

```
withStyle = compose(
  withPadding(30), // padding: 30px;
  withMargin(40), // margin: 40px;
  isFlexParent(), // display: flex;
)

MyComponent = withStyle(BaseComponent);

```


## to decide:
- How do we want to expose things like align-items for flexbox?
- Do we want to provide default positioning utilities?
- Should everything be a function, or do we allow more configuration as params..?

