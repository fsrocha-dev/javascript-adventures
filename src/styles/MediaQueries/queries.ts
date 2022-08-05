import { up, down, between, only, createTheme } from 'styled-breakpoints';

const queries = createTheme({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
});

export { queries, up, down, between, only }