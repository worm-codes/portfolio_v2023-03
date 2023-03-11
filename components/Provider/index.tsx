import { ReactNode } from 'react';

import ThemeProvider from './ThemeProvider';

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Provider;
