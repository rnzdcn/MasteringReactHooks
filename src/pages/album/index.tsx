import React from 'react'
import Image from '@/components/generic/Image'

type AlbumType = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailIrl: string
}
const Album = ({ albums }: { albums: AlbumType[] }) => {
  return (
    <div className={'min-h-screen py-10'}>
      <div className={'container mx-auto'}>
        <h1 className={'text-3xl text-center p-4'}>PHOTOS</h1>

        <div className={'relative '}>
          <div className={'flex flex-wrap'}>
            {albums.map((photo, i) => (
              <Image key={i} src={photo.url} alt={photo.title} className={'h-48 w-48'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Album

export async function getServerSideProps() {
  const albums = await (await fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'force-cache' })).json()

  return {
    props: {
      albums,
    },
  }
}
