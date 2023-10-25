'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

type VideoProps = {
  src: string
  img: string
}

const Video = ({ src, img }: VideoProps) => {
  const videoElem = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = videoElem.current
    if (video) {
      video.play()
    }

    return () => {
      if (video) {
        video.pause()
      }
    }
  }, [videoElem])

  return (
    <div className="relative flex max-h-[580px] min-h-[480px] max-w-[260px] cursor-pointer items-center rounded-xl bg-black">
      <video
        ref={videoElem}
        loop
        muted
        className="mx-auto h-full rounded-xl object-cover"
        src={src}
      />
      <div className="absolute bottom-14 right-2 h-[60px] w-[90px]">
        {img ? (
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            src={img}
            alt="overlay picture"
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Video
