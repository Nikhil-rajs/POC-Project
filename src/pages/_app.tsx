import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import 'tailwindcss/tailwind.css';
import 'assets/main.scss';
import { Roboto } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const roboto = Roboto({ subsets: ['latin'], weight: '300' });
function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
    // Note Next.js does not (currently) provide anything for translation, only i18n routing.
    // If your app is not multilingual, next-localization and references to it can be removed.
    <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
      <main className={roboto.className}>
        <Component {...rest} />
      </main>
    </I18nProvider>
  );
}

export default App;
