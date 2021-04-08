#!/usr/bin/env bash
deno install --unstable -A -f -n aleph https://deno.land/x/aleph/cli.ts
deno install -qA -f -n vr https://deno.land/x/velociraptor/cli.ts
npm i -g vercel
npm i -g typescript
npm i -g typescript-deno-plugin
