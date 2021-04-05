import { useDeno } from "framework/react";
import React from "react";

export default function Home() {
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>Hello World</title>
      </head>
      <h1>
        hello alephjs
      </h1>
    </div>
  );
}
