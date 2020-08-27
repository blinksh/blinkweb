import React from "react";
import "../styles/index.scss";
import Head from "next/head";

export default function BlinkApp({ Component, pageProps }: any) {
  return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </>
    )
}
