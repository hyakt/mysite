import React, { useState } from "react";

const Posts = () => {
  useState(async () => {
    fetch("/api/pages").then((d) => d.json().catch(() => {})).then((d) =>
      console.log(d)
    );

    const meta = await import("./meta.mdx");
    console.log("meta: ", meta);
  }, []);

  return (
    <div>
      posts
    </div>
  );
};

export default Posts;
