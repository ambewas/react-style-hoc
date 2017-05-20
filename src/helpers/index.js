export const generateStyleObject = (style, value) => {
  if (!style) {
    return undefined;
  }

  // it's a style object with defaults
  if (typeof style === 'object' && !Array.isArray(style)) {
    return style;
  }

  // just an array with style keys
  if (Array.isArray(style)) {
    return Object.assign(...style.map(key => ({ [key]: value })));
  }

  // a style key string
  return Object.assign({ [style]: value });
};