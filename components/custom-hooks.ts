import { useDeno } from "framework/react";
import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";
import { readAll } from "https://deno.land/std/io/util.ts";

type MarkdownFile = {
  filename: string;
  readonly [key: string]: unknown;
};

const decoder = new TextDecoder();

export const useMarkdownFiles = (path: string): MarkdownFile[] => (
  useDeno(async () => {
    const posts: MarkdownFile[] = [];
    for await (const { name } of Deno.readDirSync(path)) {
      if (!name.includes(".md")) continue;
      const filepath = `${path}/${name}`;
      const file = await Deno.open(filepath, { read: true });
      const content = await readAll(file);
      const fileInfo = await Deno.fstat(file.rid);
      const { __content, ...meta } = safeLoadFront(decoder.decode(content));
      posts.push({ filename: name.split(".")[0], ...meta, ...fileInfo });
      Deno.close(file.rid);
    }
    return posts.sort((a, b) => (a.birthtime as number) - (b.birthtime as number));
  })
);
