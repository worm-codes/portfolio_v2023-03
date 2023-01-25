import { ReactNode } from 'react';

import ConfigProvider from './ConfigProvider';
// import ReduxProvider from './ReduxProvider';
import ThemeProvider from './ThemeProvider';

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  return (
    // <ReduxProvider>
    <ConfigProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ConfigProvider>
    // </ReduxProvider>
  );
}

export default Provider;
