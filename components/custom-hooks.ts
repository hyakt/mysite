import { useDeno } from "framework/react";
import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";

type MarkdownFile = {
  filename: string;
  readonly [key: string]: string;
};

const decoder = new TextDecoder();

export const useMarkdownFiles = (path: string): MarkdownFile[] => (
  useDeno(async () => {
    const posts: MarkdownFile[] = [];
    for await (const { name } of Deno.readDir(path)) {
      if (!name.includes(".md")) continue;
      const content = await Deno.readFile(`${path}/${name}`);
      const { __content, ...meta } = safeLoadFront(decoder.decode(content));
      posts.push({ filename: name.split(".")[0], ...meta });
    }
    return posts;
  })
);
