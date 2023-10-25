'use client'

import {
  selectBio,
  selectImage,
  selectName,
  useSelector,
  useDispatch,
  generalSlice,
  selectIsEditProfileOpen,
} from '@/lib/redux'
import { type ChangeEvent, useCallback, useState, useMemo, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'
import Image from 'next/image'
import TextInput from '../TextInput'
import Cropper, { type ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'

const EditProfileOverlay = () => {
  const userName = useSelector(selectName)
  const userBio = useSelector(selectBio)
  const userImage = useSelector(selectImage)
  const isEditProfileOpen = useSelector(selectIsEditProfileOpen)

  const [formUserName, setFormUserName] = useState(userName)
  const [formUserBio, setFormUserBio] = useState(userBio)
  const [formUserImage, setFormUserImage] = useState(userImage)

  const [uploadedImage, setUploadedImage] = useState<File | null>(null)

  const dispatch = useDispatch()
  const { setIsEditProfileOpen } = generalSlice.actions

  const isUpdated = useMemo(
    () =>
      formUserName && (formUserName !== userName || formUserBio.length >= 1),
    [formUserBio.length, formUserName, userName]
  )

  const handleUsernameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFormUserName(e.target.value)
    },
    []
  )

  const getUploadedImage = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputElement = e.target as HTMLInputElement
      if (inputElement.files !== null && inputElement.files.length >= 1) {
        setUploadedImage(inputElement.files[0])
      }
    },
    []
  )

  const cropperRef = useRef<ReactCropperElement>(null)

  const cropAndUpdateImage = useCallback(async () => {
    const cropper = cropperRef.current?.cropper
    try {
      cropper?.getCroppedCanvas().toBlob((blob) => {
        if (!blob) {
          throw new Error('Failed to get the cropped image')
        }
        const formData = new FormData()
        formData.append('image', blob)

        // TODO: update backend data
        setFormUserImage(userImage) // 表单图片更新成与后台数据一致
        setUploadedImage(null) // 清空已上传图片变量
      })
    } catch (error) {
      console.log(error)
    }
  }, [userImage])

  const updateUserInfo = useCallback(async () => {
    try {
      // TODO: update backend data
      setFormUserName(userName) // 表单用户名更新成与后台数据一致
      setFormUserBio(userBio) // 表单bio更新成与后台数据一致

      setTimeout(() => {
        dispatch(setIsEditProfileOpen(false))
      }, 100)
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, setIsEditProfileOpen, userBio, userName])

  return (
    <>
      {isEditProfileOpen ? (
        <div
          id="EditProfileOverlay"
          className="fixed left-0 top-0 z-50 flex h-full w-full justify-center overflow-auto bg-black bg-opacity-50 pt-14 md:pt-[105px]"
        >
          <div
            className={`${!uploadedImage ? 'h-[655px]' : 'h-[580px]'} 
                        relative mx-3 mb-10 h-[655px] w-full max-w-[700px] rounded-lg bg-white p-4 sm:h-[580px]`}
          >
            <div className="absolute left-0 top-0 flex w-full items-center justify-between border-b border-b-gray-300 p-5">
              <div className="text-[22px] font-medium">Edit profile</div>
              <button
                onClick={() => {
                  dispatch(setIsEditProfileOpen(false))
                }}
              >
                <CloseIcon className="text-[25px]" />
              </button>
            </div>

            <div
              className={`${
                !uploadedImage ? 'mt-16' : 'mt-[58px]'
              } h-[calc(500px-200px)]`}
            >
              <>
                {!uploadedImage ? (
                  <div>
                    <div
                      id="ProfilePhotoSection"
                      className="flex h-[145px] w-full flex-col border-b px-1.5 py-2 sm:h-[118px]"
                    >
                      <div className="mb-1 text-center text-[15px] font-semibold text-gray-700 sm:mb-0 sm:w-[160px] sm:text-left">
                        Profile photo
                      </div>

                      <div className="flex items-center justify-center sm:-mt-6">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer"
                        >
                          <div className="relative h-[90px] w-[95px]">
                            <Image
                              className="rounded-full"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              referrerPolicy="no-referrer"
                              src={formUserImage || '/placeholder_img.png'}
                              alt="profile picture"
                            />
                          </div>

                          <div className="absolute bottom-0 right-0 inline-block w-[32px] rounded-full border border-gray-300 bg-white p-1 shadow-xl">
                            <DriveFileRenameOutlineOutlinedIcon className="-mt-1 ml-0.5 text-[17px]" />
                          </div>
                        </label>
                        <input
                          className="hidden"
                          type="file"
                          id="image"
                          onInput={(e) => getUploadedImage(e)}
                          accept="image/png, image/jpeg, image/jpg"
                        />
                      </div>
                    </div>

                    <div
                      id="UsernameSectionSection"
                      className="mt-1.5 flex w-full flex-col  border-b px-1.5 py-2  sm:h-[118px]"
                    >
                      <div className="mb-1 text-center text-[15px] font-semibold text-gray-700 sm:mb-0 sm:w-[160px] sm:text-left">
                        Username
                      </div>

                      <div className="flex items-center justify-center sm:-mt-6">
                        <div className="w-full max-w-md sm:w-[60%]">
                          <TextInput
                            text={formUserName}
                            placeholder="Username"
                            inputType="text"
                            max={50}
                            onTextChange={(e) => {
                              handleUsernameChange(e)
                            }}
                          />
                          <div className="mt-4 text-[11px] text-gray-500">
                            Usernames can only contain letters, numbers,
                            underscores, and periods. Changing your username
                            will also change your profile link.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="BioSection"
                      className="mt-2 flex w-full  flex-col px-1.5 py-2 sm:h-[120px]"
                    >
                      <div className="mb-1 text-center text-[15px] font-semibold text-gray-700 sm:mb-0 sm:w-[160px] sm:text-left">
                        Bio
                      </div>

                      <div className="flex items-center justify-center sm:-mt-6">
                        <div className="w-full max-w-md sm:w-[60%]">
                          <textarea
                            cols={30}
                            rows={4}
                            v-model="userBio"
                            maxLength={80}
                            className="
                                w-full
                                resize-none
                                rounded-md
                                border
                                border-gray-300
                                bg-[#F1F1F2]
                                px-3
                                py-2.5
                                text-gray-800
                                focus:outline-none
                            "
                          ></textarea>
                          {formUserBio ? (
                            <div className="text-[11px] text-gray-500">
                              {formUserBio.length}/80
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[430px] w-full">
                    <Cropper
                      src={URL.createObjectURL(uploadedImage)}
                      className="h-[430px]"
                      initialAspectRatio={16 / 9}
                      guides={false}
                      ref={cropperRef}
                    />
                  </div>
                )}
              </>
            </div>

            <div
              id="ButtonSection"
              className="absolute bottom-0 left-0 w-full border-t border-t-gray-300 p-5"
            >
              {!uploadedImage ? (
                <div
                  id="UpdateInfoButtons"
                  v-if="!uploadedImage"
                  className="flex items-center justify-end"
                >
                  <button
                    onClick={() => {
                      dispatch(setIsEditProfileOpen(false))
                    }}
                    className="flex items-center rounded-sm border px-3 py-[6px] hover:bg-gray-100"
                  >
                    <span className="px-2 text-[15px] font-medium">Cancel</span>
                  </button>

                  <button
                    disabled={!isUpdated}
                    onClick={() => updateUserInfo()}
                    className={`${
                      !isUpdated ? 'bg-gray-200' : 'bg-[#F02C56]'
                    } ml-3 flex items-center rounded-md border bg-[#F02C56] px-3 py-[6px] text-white`}
                  >
                    <span className="mx-4 text-[15px] font-medium">Save</span>
                  </button>
                </div>
              ) : (
                <div
                  id="CropperButtons"
                  className="flex items-center justify-end"
                >
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="flex items-center rounded-sm border px-3 py-[6px] hover:bg-gray-100"
                  >
                    <span className="px-2 text-[15px] font-medium">Cancel</span>
                  </button>

                  <button
                    onClick={() => cropAndUpdateImage()}
                    className="ml-3 flex items-center rounded-md border bg-[#F02C56] px-3 py-[6px] text-white"
                  >
                    <span className="mx-4 text-[15px] font-medium">Apply</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default EditProfileOverlay
