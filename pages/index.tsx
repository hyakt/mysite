import React from "react";
import "./index.css";
import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <div>
          <img
            className="rounded-full h-56 w-56"
            src="https://www.gravatar.com/avatar/d9618150777ac86730044bb6de049016?s=240"
          />
        </div>
        <div className="mt-8">
          <div className="text-xl text-center font-semibold">
            Hayato Kajiyama
          </div>
          <div className="text-base text-center text-gray-800 mt-2">
            Web Engineer ♥ Emacs, JavaScript, HCI and 🍺
          </div>
        </div>
      </div>
    </div>
  );
}
