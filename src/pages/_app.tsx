import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/globalsStyles';
import { defaultTheme } from '@/styles/themes/default';
import { Header } from '@/components/Header';
import { AppContainer } from '@/styles/pages/app';

import { Filter } from '@/components/Filter';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Header />
        <AppContainer>
          <Filter />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AppContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
