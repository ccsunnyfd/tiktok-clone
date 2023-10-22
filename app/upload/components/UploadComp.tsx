'use client'

import Image from 'next/image'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'

import { Icons } from '../../components/Icons'
import Caption from './Caption'
import { type ChangeEvent, useCallback, useMemo, useRef, useState } from 'react'
import WarningBar from './WarningBar'
import useUploadForm from '../hooks/useUploadForm'

const UploadComp = () => {
  const {
    caption,
    changeCaption,
    fileData,
    changeFileData,
    errors,
    hasError,
    warning,
  } = useUploadForm()

  const fileDisplay = useMemo(() => {
    if (fileData) {
      return URL.createObjectURL(fileData)
    }
    return null
  }, [fileData])

  const file = useRef<HTMLInputElement>(null)

  const [responseErrors, setResponseErrors] = useState<{
    [key: string]: [value: any]
  } | null>(null)

  const handleTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      changeCaption(event.target.value)
    },
    [changeCaption]
  )

  const handleFileChange = useCallback(() => {
    if (file.current && file.current.files) {
      const fileHandler = file.current.files[0]
      changeFileData(fileHandler)
    }
  }, [changeFileData])

  const handleFileDrop = useCallback(
    (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault()
      changeFileData(event.dataTransfer.files[0])
    },
    [changeFileData]
  )

  const clearVideo = useCallback(() => {
    changeFileData(null)
  }, [changeFileData])

  const discard = useCallback(() => {
    changeFileData(null)
    changeCaption('')
  }, [changeCaption, changeFileData])

  const createPost = useCallback(async () => {
    if (hasError) return

    try {
    } catch (err) {
      // setResponseErrors(err.response.data.errors)
    }
  }, [hasError])

  return (
    <>
      <WarningBar message={warning} />

      <div className="h-[100vh] bg-[#F8F8F8]">
        <div className="mx-auto flex w-full max-w-[1140px] justify-between px-2">
          <div className="mb-[40px] mt-[80px] w-full rounded-md bg-white px-4 py-6 shadow-lg md:px-10">
            <div>
              <div className="text-[23px] font-semibold">Upload video</div>
              <div className="mt-1 text-gray-400">
                Post a video to your account
              </div>
            </div>

            <div className="mt-8 gap-6 md:flex">
              {!fileDisplay ? (
                <label
                  htmlFor="fileInput"
                  onDrop={(e) => handleFileDrop(e)}
                  onDragOver={(event) => event.preventDefault()}
                  className="border-dashedborder-gray-300 mx-auto mb-6  mt-4 
                    flex h-[470px]  w-full max-w-[260px] cursor-pointer flex-col
                    items-center justify-center rounded-lg border-2 p-3 text-center
                     hover:bg-gray-100  md:mx-0"
                >
                  <CloudUploadOutlinedIcon className="text-[40px] text-[#b3b3b1]" />
                  <div className="mt-4 text-[17px]">Select video to upload</div>
                  <div className="mt-1.5 text-[13px] text-gray-500">
                    Or drag and drop a file
                  </div>
                  <div className="mt-12 text-sm text-gray-400">MP4</div>
                  <div className="mt-2 text-[13px] text-gray-400">
                    Up to 30 minutes
                  </div>
                  <div className="mt-2 text-[13px] text-gray-400">
                    Less than 2 GB
                  </div>
                  <div className="mt-8 w-[80%] rounded-sm bg-[#F02C56] px-2 py-1.5 text-[15px] text-white">
                    Select file
                  </div>
                  <input
                    ref={file}
                    type="file"
                    id="fileInput"
                    onInput={() => handleFileChange()}
                    hidden
                    accept=".mp4"
                  />
                </label>
              ) : (
                <div
                  className="relative mx-auto mb-16 mt-4 flex h-[540px] w-full 
                      max-w-[260px] cursor-pointer items-center justify-center rounded-2xl p-3 md:mx-0 md:mb-12"
                >
                  <div className="h-full w-full bg-black" />
                  <Image
                    priority
                    fill
                    className="pointer-events-none absolute z-20"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                    src="/mobile-case.png"
                    alt="mobile-case picture"
                  />

                  <div className="absolute bottom-6 right-4 z-20 h-[60px] w-[90px]">
                    <Image
                      priority
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      referrerPolicy="no-referrer"
                      src="/tiktok-logo-white.png"
                      alt="mobile-case picture"
                    />
                  </div>

                  <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 h-full w-full rounded-xl object-cover p-[13px]"
                    src={fileDisplay}
                  />

                  <div className="absolute -bottom-12 z-50 flex w-full items-center justify-between rounded-xl border border-gray-300 p-2">
                    <div className="flex items-center truncate">
                      <CheckCircleOutlineOutlinedIcon className="min-w-[16px] text-[16px]" />
                      <div className="truncate text-ellipsis pl-1 text-[11px]">
                        {fileData?.name}
                      </div>
                    </div>
                    <button
                      onClick={() => clearVideo()}
                      className="ml-2 text-[11px] font-semibold"
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}

              <div className="mb-6 mt-4">
                <div className="flex bg-[#F8F8F8] px-6 py-4">
                  <div>
                    <Icons.CutterOff className="mr-4 text-[20px]" />
                  </div>
                  <div>
                    <div className="text-semibold mb-1.5 text-[15px]">
                      Divide videos and edit
                    </div>
                    <div className="text-semibold text-[13px] text-gray-400">
                      You can quickly divide videos into multiple parts, remove
                      redundant parts and turn landscape videos into portrait
                      videos
                    </div>
                  </div>
                  <div className="my-auto flex h-full w-full max-w-[130px] justify-end text-center">
                    <button className="rounded-sm bg-[#F02C56] px-8 py-1.5 text-[15px] text-white">
                      Edit
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <Caption
                    text={caption}
                    onTextChange={(e) => handleTextChange(e)}
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => discard()}
                    className="mt-8 rounded-sm border px-10 py-2.5 text-[16px] hover:bg-gray-100"
                  >
                    Discard
                  </button>
                  <button
                    onClick={() => createPost()}
                    className="mt-8 rounded-sm border bg-[#F02C56] px-10 py-2.5 text-[16px] text-white"
                  >
                    Post
                  </button>
                </div>

                {responseErrors ? (
                  <div className="mt-4">
                    {responseErrors && responseErrors.video ? (
                      <div className="text-red-600">
                        {responseErrors.video[0]}
                      </div>
                    ) : (
                      <></>
                    )}
                    {responseErrors && responseErrors.text ? (
                      <div className="text-red-600">
                        {responseErrors.text[0]}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadComp
