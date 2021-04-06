import { useDeno } from "framework/react";
import React from "react";
import "https://esm.sh/tailwindcss/dist/tailwind.min.css";

export default function Home() {
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className="page">
      <head>
        <title>Hello World</title>
      </head>
      <h1 className='text-xl'>
        hello alephjs
      </h1>
    </div>
  );
}
