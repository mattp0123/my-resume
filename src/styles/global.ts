import { globalCss } from '@stitches/react';

const useGlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    padding: 32,
    fontFamily: `'Open Sans', Helvetica, Arial, sans-serif`,
    color: '#333',
  },
  a: {
    font: 'inherit',
    color: 'inherit',
  },
});

export default useGlobalCss;
