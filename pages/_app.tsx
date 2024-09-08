import '../styles/globals.css';
import type { AppProps } from "next/app";
import ScrollObserver from '@/utils/scroll-observer';
import { appWithTranslation } from 'next-i18next';
import '../utils/i18.ts'; // Import the i18n setup to ensure it's initialized



function MainApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  )
}
export default appWithTranslation(MainApp);
