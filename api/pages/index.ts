import type { APIRequest } from 'aleph/types.ts'

const handler = async (req: APIRequest) => {
  let pages = []
  for await (const dirEntry of Deno.readDir("/")) {
    pages.push(dirEntry)
  }
  req.json({ pages })
}

export default handler
