/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;