import { curry } from 'ramda';
import { createStyleHoc } from './createStyleHoc.js';

export const withMargin = createStyleHoc({ margin: 10, padding: '10vh' });
// export const withMargin = createStyleHoc(['margin', 'padding']);
// export const withMargin = createStyleHoc('margin');
