import type { NextApiRequest, NextApiResponse } from 'next'

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<PostType>) {
  const data = await (
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })
  ).json()

  try {
    res.status(200).json(data)
  } catch (e: any) {
    res.status(400)
    console.error('Something went wrong', e.message)
  }
}
