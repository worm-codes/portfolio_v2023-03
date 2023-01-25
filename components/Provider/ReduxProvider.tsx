import { ReactNode } from 'react';

import { Provider } from 'react-redux';

// // import { store } from 'stores';

interface ApiProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ApiProps) => {
  // return <Provider>{children}</Provider>;
};

export default ReduxProvider;
