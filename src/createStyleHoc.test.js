import React from 'react'; // eslint-disable-line
import renderer from 'react-test-renderer';
import { createStyleHoc } from './createStyleHoc.js';

const TestComponent = ({ style }) => <div style={style}>unstyled</div>;

describe('createStyleHoc', () => {


  it('should return a HOC', () => {
    expect(createStyleHoc()).toBeInstanceOf(Function);
    expect(createStyleHoc('margin')).toBeInstanceOf(Function);
    expect(createStyleHoc({margin: 10})).toBeInstanceOf(Function);
    expect(createStyleHoc({margin: 10}, '')).toBeInstanceOf(Function);
  });

  test('when wrapping a component in a HOC created by createStyleHoc, it should add the correct style prop', function() {
    const withMargin = createStyleHoc('padding', 10);
    const Styled = withMargin(TestComponent); // eslint-disable-line

    const component = renderer.create(
      <Styled>qdsf</Styled>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.props.style).toEqual({ padding: 10 });
  });

  test('when using createStyleHoc with a style object, it should add the correct style prop', function() {
    const withMargin = createStyleHoc({padding: 10, margin: 40}, '');
    const Styled = withMargin(TestComponent); // eslint-disable-line

    const component = renderer.create(
      <Styled>qdsf</Styled>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.props.style).toEqual({ padding: 10, margin: 40 });
  });
});

