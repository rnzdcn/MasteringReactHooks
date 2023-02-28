import React from 'react'
import useSWR from 'swr'
import { PostType } from '@/pages/api/post'

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())

const Post = () => {
  const { data, isLoading } = useSWR(() => `/api/post`, fetcher)

  return (
    <div className={'container mx-auto my-10'}>
      <h1 className={'text-3xl text-center p-4'}>POSTS</h1>

      {!isLoading && (
        <table className={'min-w-full table-auto text-left'}>
          <thead className={'text-black uppercase'}>
            <tr>
              <th className={'p-4 border border-gray-200'}>Title</th>
              <th className={'p-4 border border-gray-200'}>Body</th>
              <th className={'p-4 border border-gray-200'}>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map(({ title, body, id }: PostType, i: number) => (
              <tr key={i}>
                <td className={'p-4 border border-gray-200'}>{title}</td>
                <td className={'p-4 border border-gray-200'}>{body}</td>
                <td className={'p-4 border border-gray-200'}>
                  <button
                    className={'border border-red-200 text-red-500 p-2 rounded-md'}
                    onClick={() => console.log(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Post
