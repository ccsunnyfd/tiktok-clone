'use client'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { useDispatch, generalSlice } from '@/lib/redux'

const EditButton = () => {
  const dispatch = useDispatch()
  const { setIsEditProfileOpen } = generalSlice.actions

  return (
    <button
      className="item-center mt-3 flex rounded-md 
              border px-3.5 py-1.5 text-[15px] font-semibold hover:bg-gray-100"
      onClick={() => {
        dispatch(setIsEditProfileOpen(true))
      }}
    >
      <EditOutlinedIcon className="mr-1 mt-0.5 text-[18px]" />
      <div>Edit profile</div>
    </button>
  )
}

export default EditButton
