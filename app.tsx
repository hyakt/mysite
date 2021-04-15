import React, { ComponentType } from "react";
import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
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
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-NSHVRRP"
      >
      </script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'GTM-NSHVRRP');
        `}
      </script>
      <main>
        <Page {...pageProps} />
      </main>
    </>
  );
}
