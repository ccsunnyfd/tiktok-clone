'use client'

import Image from 'next/image'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Icons } from '@/app/components/Icons'

const Page = () => {
  const [comment, setComment] = useState<string | null>(null)
  const [inputFocused, setInputFocused] = useState(false)

  const videoElem = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const videoElemVal = videoElem.current
    if (videoElemVal) {
      setTimeout(() => {
        setIsLoaded(true)
        videoElemVal.play()
      }, 500)
    }
    return () => {
      if (videoElemVal) {
        videoElemVal.pause()
        videoElemVal.currentTime = 0
      }
    }
  }, [])

  const loopThroughPostsDown = useCallback(() => {}, [])

  const loopThroughPostsUp = useCallback(() => {}, [])

  const isLiked = useMemo(() => {
    return true
  }, [])

  const likePost = useCallback(async () => {
    try {
    } catch (error) {
      console.log(error)
    }
  }, [])

  const unlikePost = useCallback(async () => {
    try {
    } catch (error) {
      console.log(error)
    }
  }, [])

  const deletePost = useCallback(async () => {
    const res = confirm('Are you sure you want to delete this post?')
    try {
      if (res) {
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleCommentChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setComment(event.target.value)
    },
    []
  )

  const addComment = useCallback(async () => {
    try {
    } catch (error) {
      console.log(error)
    }
  }, [])

  const deleteComment = useCallback(async () => {
    let res = confirm('Are you sure you want to delete this comment?')
    try {
      if (res) {
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div
      id="PostPage"
      className="fixed left-0 top-0 z-50 h-full w-full justify-between overflow-auto bg-black lg:flex lg:overflow-hidden"
    >
      <div className="relative h-full lg:w-[calc(100%-540px)]">
        <Link
          href="/"
          className="absolute z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
        >
          <CloseIcon className="text-[27px] text-white" />
        </Link>

        <div>
          <button
            disabled={!isLoaded}
            onClick={() => loopThroughPostsUp()}
            className="absolute right-4 top-4 z-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
          >
            <KeyboardArrowUpIcon className="text-[30px] text-white" />
          </button>

          <button
            disabled={!isLoaded}
            onClick={() => loopThroughPostsDown()}
            className="absolute right-4 top-20 z-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
          >
            <KeyboardArrowDownIcon className="text-[30px] text-white" />
          </button>
        </div>

        <div className="relative h-[45px] w-[45px]">
          <Image
            className="absolute left-[70px] top-[18px] mx-auto rounded-full lg:mx-0"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            src="/tiktok-logo-small.png"
            alt="logo picture"
          />
        </div>

        {true ? (
          <video
            className="absolute z-[-1] my-auto h-screen w-full object-cover"
            src="/cat.mp4"
          />
        ) : (
          <></>
        )}

        {!isLoaded ? (
          <div className="flex h-screen items-center justify-center bg-black bg-opacity-70 lg:min-w-[480px]">
            <Icons.Loader2 className="ml-1 animate-spin text-[100px] text-white" />
          </div>
        ) : (
          <></>
        )}
        <div className="bg-black bg-opacity-70 lg:min-w-[480px]">
          {true ? (
            <video
              ref={videoElem}
              loop
              muted
              className="mx-auto h-screen"
              src="/cat.mp4"
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div
        id="InfoSection"
        v-if="$generalStore.selectedPost"
        className="relative h-full w-full bg-white lg:max-w-[550px]"
      >
        <div className="py-7" />

        <div className="flex items-center justify-between px-8">
          <div className="flex items-center">
            <Link href="/">
              <div className="relative h-[40px] w-[40px]">
                <Image
                  className="mx-auto rounded-full lg:mx-0"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src="https://picsum.photos/id/83/300/320.jpg"
                  alt="profile picture"
                />
              </div>
            </Link>
            <div className="ml-3 pt-0.5">
              <div className="text-[17px] font-semibold">User Name</div>
              <div className="-mt-5 text-[13px] font-light">
                user name
                <span className="relative -top-[2px] pr-0.5 text-[30px] ">
                  .
                </span>
                <span className="font-medium">2023/07/10</span>
              </div>
            </div>
          </div>

          {true ? (
            <Icons.Trash2
              onClick={() => deletePost()}
              className="cursor-pointer"
              name="material-symbols:delete-outline-sharp text-[25px]"
            />
          ) : (
            <></>
          )}
        </div>

        <div className="mt-4 px-8 text-sm">Post Text</div>

        <div className="mt-4 px-8 text-sm font-bold">
          <AudioFileOutlinedIcon className="text-[17px]" />
          original sound - user name
        </div>

        <div className="mt-8 flex items-center px-8">
          <div className="flex items-center pb-4 text-center">
            <button
              onClick={() => {
                isLiked ? unlikePost() : likePost()
              }}
              className="cursor-pointer rounded-full bg-gray-200 p-2"
            >
              <FavoriteOutlinedIcon
              // className={`text-[25px] ${isLiked ? 'text-[#F02C56]' : ''}`}
              />
            </button>
            <span className="pl-2 pr-4 text-xs font-semibold text-gray-800">
              10243
            </span>
          </div>

          <div className="flex items-center pb-4 text-center">
            <div className="cursor-pointer rounded-full bg-gray-200 p-2">
              <MessageOutlinedIcon className="text-[25px]" />
            </div>
            <span className="pl-2 text-xs font-semibold text-gray-800">43</span>
          </div>
        </div>

        <div
          id="Comments"
          className="z-0 h-[calc(100%-273px)] w-full overflow-auto border-t-2 bg-[#F8F8F8]"
        >
          <div className="pt-2" />

          {false ? (
            <div className="mt-6 text-center text-xl text-gray-500">
              No comments...
            </div>
          ) : (
            <div
              key={'1'}
              className="mt-4 flex items-center justify-between px-8"
            >
              <div className="relative flex w-full items-center">
                <Link href="`/profile/1`">
                  <div className="relative h-[40px] w-[40px]">
                    <Image
                      className="absolute top-0 mx-auto rounded-full lg:mx-0"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      referrerPolicy="no-referrer"
                      src="https://picsum.photos/id/83/300/320.jpg"
                      alt="profile picture"
                    />
                  </div>
                </Link>
                <div className="ml-14 w-full pt-0.5">
                  <div className="flex items-center justify-between text-[18px] font-semibold">
                    comment user name
                    {true ? (
                      <Icons.Trash2
                        onClick={() => deleteComment()}
                        className="cursor-pointer"
                        name="material-symbols:delete-outline-sharp text-[25px]"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="text-[15px] font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore eaque ut explicabo consequatur modi voluptatibus vero
                    accusamus amet. Voluptate perferendis necessitatibus saepe
                    sint nihil explicabo fugit laudantium voluptates. Soluta,
                    enim.
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-28" />
        </div>

        <div
          id="CreateComment"
          v-if="$userStore.id"
          className="absolute bottom-0 flex h-[85px] w-full items-center justify-between border-t-2 bg-white px-8 py-5 lg:max-w-[550px]"
        >
          <div
            className={`${
              inputFocused
                ? 'border-2 border-gray-400'
                : 'border-2 border-[#F1F1F2]'
            } flex w-full items-center rounded-lg bg-[#F1F1F2] lg:max-w-[420px]`}
          >
            <input
              value={comment || ''}
              onChange={(e) => handleCommentChange(e)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className="w-full rounded-lg bg-[#F1F1F2] p-2 text-[14px] focus:outline-none lg:max-w-[420px]"
              type="text"
              placeholder="Add comment..."
            />
          </div>
          <button
            disabled={!comment}
            onClick={() => addComment()}
            className={`${
              comment ? 'cursor-pointer text-[#F02C56]' : 'text-gray-400'
            } ml-5 pr-1 text-sm font-semibold`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
