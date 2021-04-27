import React from "react";
import { useDeno } from "framework/react";

import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";

const decoder = new TextDecoder();

const POSTS_PATH = "./pages/posts";

const Blog = () => {
  const posts = useDeno(async () => {
    const posts = [];
    for await (const { name } of Deno.readDir(POSTS_PATH)) {
      const content = await Deno.readFile(`${POSTS_PATH}/${name}`);
      const { __content, ...meta } = safeLoadFront(decoder.decode(content));
      posts.push({ ...meta, filename: name.split(".")[0] });
    }
    return posts;
  });

  return (
    <>
      {posts.map((e) => <div key={e}><a href={`/posts/${e.filename}`}>{e.filename}</a></div>)}
    </>
  );
};

export default Blog;
