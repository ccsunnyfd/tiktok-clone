'use client'

import {
  generalSlice,
  selectUserId,
  useDispatch,
  useSelector,
} from '@/lib/redux'
import AddIcon from '@mui/icons-material/Add'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

const UploadButton = () => {
  const router = useRouter()

  const userId = useSelector(selectUserId)
  const dispatch = useDispatch()
  const { setIsLoginOpen } = generalSlice.actions

  const isLoggedIn = useCallback(() => {
    if (userId) {
      router.push('/upload')
    } else {
      dispatch(setIsLoginOpen(true))
    }
  }, [dispatch, router, setIsLoginOpen, userId])

  return (
    <button
      onClick={() => {
        isLoggedIn()
      }}
      className="flex items-center rounded-sm border px-3 py-[6px] hover:bg-gray-100"
    >
      <AddIcon className="text-[22px] text-black" />
      <span className="px-2 text-[15px] font-medium">Upload</span>
    </button>
  )
}

export default UploadButton
