import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "@/utils/scroll-observer";
import { appWithTranslation } from "next-i18next";
import "../utils/i18";

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}
export default appWithTranslation(MainApp);
