'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { Icons } from '@/app/components/Icons'

type PostUserProps = {
  post: {
    video: string
  }
}

const PostUser = ({ post }: PostUserProps) => {
  const videoElem = useRef<HTMLVideoElement>(null)

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const videoElemVal = videoElem.current
    if (videoElemVal) {
      setTimeout(() => {
        setIsLoaded(true)
      }, 300)
    }
    return () => {
      if (videoElemVal) {
        videoElemVal.pause()
        videoElemVal.currentTime = 0
      }
    }
  }, [])

  const handleMouseHover = useCallback((isHover: boolean) => {
    const videoElemVal = videoElem.current
    if (videoElemVal) {
      if (isHover) {
        videoElemVal.play()
      } else {
        videoElemVal.pause()
      }
    }
  }, [])

  const displayPost = useCallback(() => {}, [])

  return (
    <div
      onClick={() => displayPost()}
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => handleMouseHover(false)}
      className=" relative cursor-pointer brightness-90 hover:brightness-[1.1]"
    >
      {!isLoaded ? (
        <div className="absolute left-0 top-0 flex aspect-[3/4] w-full items-center justify-center rounded-md bg-black object-cover">
          <Icons.Loader2 className="ml-1 animate-spin text-[100px] text-white" />
        </div>
      ) : (
        <></>
      )}
      <div>
        <video
          ref={videoElem}
          muted
          loop
          className="aspect-[3/4] rounded-md object-cover"
          src="/cat.mp4"
        />
      </div>
      <div className="px-1">
        <div className="break-words pt-1 text-[15px] text-gray-700">
          Post Text
        </div>
        <div className="-ml-1 flex items-center text-xs font-bold text-gray-600">
          <BarChartOutlinedIcon className="text-[20px]" />
          3%
          <ErrorOutlineOutlinedIcon className="ml-1 text-[16px]" />
        </div>
      </div>
    </div>
  )
}

export default PostUser
