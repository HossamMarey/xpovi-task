import NextNProgress from "nextjs-progressbar";

import "@/assets/sass/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={2} color="#de300a" stopDelayMs={0} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
