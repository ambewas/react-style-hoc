import { curry } from 'ramda';
import { createStyleHoc } from './createStyleHoc.js';
// export const withPadding = createStyleHoc({ margin: 10, padding: '10vh' });
// export const withPadding = createStyleHoc(['margin', 'padding']);
export const withPadding = createStyleHoc('padding');
