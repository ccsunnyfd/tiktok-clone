'use client'

import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SendIcon from '@mui/icons-material/Send'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import Link from 'next/link'
import Image from 'next/image'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {isLoggedIn ? (
        <div className="flex items-center">
          <button
            onClick={() => {}}
            className="flex items-center rounded-md border bg-[#F02C56] px-3 py-[6px] text-white"
          >
            <span className="mx-4 text-[15px] font-medium">Log in</span>
          </button>
          <MoreVertIcon className="text-[25px] text-[#161724]" />
        </div>
      ) : (
        <div className="flex items-center">
          <SendIcon className="ml-1 mr-4 text-[30px] text-[#161724]" />
          <MessageOutlinedIcon className="mr-5 text-[27px] text-[#161724]" />
          <div className="relative">
            <button
              className="mt-1"
              onClick={() => {
                setShowMenu((prev) => !prev)
              }}
            >
              <div className="relative h-9 w-[33px]">
                <Image
                  className="rounded-full"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src="https://picsum.photos/id/83/300/320.jpg"
                  alt="profile picture"
                />
              </div>
            </button>

            {showMenu ? (
              <div
                id="PopupMenu"
                className="absolute -right-2 top-[43px] w-[200px] rounded-lg border bg-white py-1.5 shadow-xl"
              >
                <Link
                  href={`/profile/${1}`}
                  onClick={() => setShowMenu(false)}
                  //   :to="`/profile/${$userStore.id}`"
                  className="flex cursor-pointer items-center justify-start px-2 py-3 hover:bg-gray-100"
                >
                  <PersonOutlineOutlinedIcon className="text-[20px]" />
                  <span className="pl-2 text-sm font-semibold">Profile</span>
                </Link>
                <div
                  onClick={() => {}}
                  //   @click="logout()"
                  className="flex cursor-pointer items-center justify-start border-t px-1.5 py-3 hover:bg-gray-100"
                >
                  <LogoutOutlinedIcon className="text-[20px]" />
                  <span className="pl-2 text-sm font-semibold">Log out</span>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default User
