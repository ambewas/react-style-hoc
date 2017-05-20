import React, { Component } from 'react';
import { withPadding, withMargin, compose, createStyleHoc } from 'react-style-hoc';

// compose styles with our default provided style HOCs
const withPaddingAndMargin = compose(
  withPadding(20),
  withMargin(50)
);


// ... or create your own style HOCS using createStyleHoc:
// pass a string (style key) -> see usage in `withAllStyles`
const withColor = createStyleHoc('color');

// pass an object with default styles applied:
// need that second argument. Gotta figure out how to get rid of it -- but it's curried, so...?
const withSomeRandomStyleAsObject = createStyleHoc({
  background: 'purple',
}, '');

// pass style key & value as arguments:
const withSomeRandomStyleAsArguments = createStyleHoc('display', 'flex');

// compose all previously made styles into one!
const withAllStyles = compose(
  withSomeRandomStyleAsArguments,
  withSomeRandomStyleAsObject,
  withPaddingAndMargin,
  withColor('#78a5ff')
);

// const TestStateless = ({ children, style }) => <div style={style}>{children}</div>;
// const Styled = withAllStyles(TestStateless);


class TestComponent extends Component {
  render() {
    return <div style={this.props.style}>a react component test</div>
  }
}

const TestStyled = withAllStyles(TestComponent)();

console.log('TestStyled',TestStyled);
class App extends Component {
  render() {
    return (
      <div className="App">
        hello
        <span style={{border: '1px solid red'}}>
          <div>with padding, composed with margin</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </span>

        <TestStyled />
      </div>
    );
  }
}

export default App;
