import React from "react";
import '../styles/index.scss';

// This default export is required in a new `pages/_app.js` file.
export default function BlinkApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}