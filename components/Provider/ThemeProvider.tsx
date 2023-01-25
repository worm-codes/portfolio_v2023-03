import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from 'theme';
export interface ThemeProps {
  children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
