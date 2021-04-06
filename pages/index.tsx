import React from "react";
import "https://esm.sh/tailwindcss/dist/tailwind.min.css";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div>
          <img
            className="rounded-full h-56 w-56"
            src="https://www.gravatar.com/avatar/d9618150777ac86730044bb6de049016?s=240"
          />
        </div>
        <div className="mt-8">
          <div className="text-xl text-center font-semibold">Hayato Kajiyama</div>
          <div className="text-base text-center text-gray-800 mt-2">
            Web Engineer ♥ Emacs, JavaScript, HCI and 🍺
          </div>
        </div>
      </div>
    </div>
  );
}
