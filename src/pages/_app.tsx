import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/globalsStyles';
import { defaultTheme } from '@/styles/themes/default';
import { Header } from '@/components/Header';
import { AppContainer } from '@/styles/pages/app';

import { Filter } from '@/components/Filter';
import { SearchForm } from '@/components/SearchForm';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Filter />
        <SearchForm />
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  );
}
