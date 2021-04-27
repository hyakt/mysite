import React from "react";
import { useMarkdownFiles } from "~/components/custom-hooks.ts"

const POSTS_PATH = "./pages/posts";

const Blog = () => {
  const posts = useMarkdownFiles(POSTS_PATH)

  return (
    <>
      {posts.map((e) => <div key={e.filename}><a href={`/posts/${e.filename}`}>{e.filename}</a></div>)}
    </>
  );
};

export default Blog;
