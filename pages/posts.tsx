import React, { useState } from "react";

const Posts = () => {
  useState(() => {
    fetch("/api/pages").then((d) => console.log(d));
  }, []);

  return (
    <div>
      posts
    </div>
  );
};

export default Posts;
