import React from "react";
import { useMarkdownFiles } from "~/components/custom-hooks.ts";

import dayjs from "http://esm.sh/dayjs";

const POSTS_PATH = "./pages/posts";

const Posts = () => {
  const posts = useMarkdownFiles(POSTS_PATH);

  return (
    <div className="page">
      <div className="posts">
        <div className="posts__title">
          Blog
        </div>
        <div className="posts-posts">
          {posts.map((e) =>
            <div key={e.filename} className="posts-posts__title">
              <a href={`/posts/${e.filename}`}>
                {dayjs(e.date).format("YYYY-MM-DD")} {e.filename}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
