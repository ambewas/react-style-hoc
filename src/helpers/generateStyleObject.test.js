import { generateStyleObject } from './index.js';

describe('generateStyleObject', () => {
  it('should return undefined if no arguments are passed', () => {
    const style = generateStyleObject();
    expect(style).toBeUndefined();
  });

  it('should return the passed style object if an object was passed', () => {
    const styleObject = { margin: '1' };
    const style = generateStyleObject(styleObject);
    expect(style).toEqual(styleObject);
  });

  it('should generate a style object when an array with style keys has been passed', () => {
    const styleArray = ['margin', 'padding'];
    const style = generateStyleObject(styleArray);
    const expectedStyle = {
      margin: undefined,
      padding: undefined
    };
    expect(style).toEqual(expectedStyle);
  });

  it('should generate a style object when a single string has been passed', () => {
    const styleArray = 'margin';
    const style = generateStyleObject(styleArray);
    const expectedStyle = {
      margin: undefined,
    };
    expect(style).toEqual(expectedStyle);
  });
});

