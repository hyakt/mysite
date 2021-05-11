import React, { ComponentType, useEffect } from "react";
import hljs from "https://cdn.skypack.dev/highlight.js";
import { gtmFrame, gtmScript } from "./lib/gtag.ts";

import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";
import "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/github.min.css";
import "./index.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  useEffect(() => {
    document?.querySelectorAll("pre code")?.forEach((el) => {
      hljs.highlightElement(el);
    });
  }, []);

  return (
    <>
      <head>
        <meta name="viewport" content="width=768" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#fefefe" />
        <meta name="theme-color" content="#fefefe" />
        <script
          dangerouslySetInnerHTML={{
            __html: gtmScript,
          }}
        />
      </head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: gtmFrame,
        }}
      />
      <main>
        <Page {...pageProps} />
      </main>
    </>
  );
}
