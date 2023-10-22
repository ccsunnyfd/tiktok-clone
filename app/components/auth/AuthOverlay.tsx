'use client'

import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'

const AuthOverlay = () => {
  const [isRegister, setIsRegister] = useState(true)

  return (
    <div
      id="AuthOverlay"
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative h-[70%] w-full max-w-[470px] rounded-lg bg-white p-4">
        <div className="flex w-full justify-end">
          <button onClick={() => {}} className="rounded-full bg-gray-100 p-1.5">
            <CloseIcon className="text-[26px]" />
          </button>
        </div>

        {isRegister ? <Login v-if="isRegister" /> : <Register />}

        <div className="absolute bottom-0 left-0 flex w-full items-center justify-center border-t py-5">
          <span className="text-[14px] text-gray-600">
            Don’t have an account?
          </span>
          <button
            onClick={() => setIsRegister((prev) => !prev)}
            className="pl-1 text-[14px] font-semibold text-[#F02C56]"
          >
            {isRegister ? <span>Sign up</span> : <span>Log in</span>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthOverlay
