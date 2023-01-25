import type { AppProps } from 'next/app';

import { Provider } from 'components';

import 'styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
