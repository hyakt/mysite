import React, { ComponentType } from "react";
import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=768px" />
      </head>
      <Page {...pageProps} />
    </main>
  );
}
