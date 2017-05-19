import { cloneElement } from 'react';

const isClassComponent = Component => Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object';

const buildStyles = ({padding, margin, display, top, bottom, left, right, position}) => { // eslint-disable-line
  return {
    padding,
    margin,
    display,
    top,
    bottom,
    left,
    right,
    position,
  };
};

const Style = (WrappedComponent) => {
  if (isClassComponent(WrappedComponent)) {
    class Enhancer extends WrappedComponent { // eslint-disable-line
      constructor(props) {
        super(props);
      }

      render() {
        const wrappedComponent = super.render();
        const newProps = {
          style: buildStyles(this.props)
        };

        const props = Object.assign({}, wrappedComponent.props, wrappedComponent.defaultProps, newProps);
        const newComponent = cloneElement(wrappedComponent, props, wrappedComponent.props.children);
        return newComponent;
      }
    }

    return Enhancer;
  }

  // stateless
  return (props) => {
    return <WrappedComponent style={buildStyles(props)} {...props}/>;
  };
};

export default Style;
