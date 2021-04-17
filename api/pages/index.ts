import type { APIRequest } from 'aleph/types.ts'

const handler = async (req: APIRequest) => {
  let pages: []
  for await (const dirEntry of Deno.readDir("/")) {
    console.log(dirEntry)
    pages.push(dirEntry)
  }
  req.json({ page })
}

export default handler
