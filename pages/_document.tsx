import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover"
          />
          <script
            type="text/javascript"
            data-padding="16px 16px"
            data-font-family="PragmataPro, arial, sans-serif"
            id="cookiebanner"
            src="https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js"
          />
          <link
            rel="preload"
            href="/fonts/pragmatapro_mono_r_liga_0827-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/pragmatapro_mono_b_liga_0827-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-84834352-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());

              gtag('config', 'UA-84834352-1');
            `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
