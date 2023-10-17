'use client'

import AddIcon from '@mui/icons-material/Add'

const Upload = () => {
  return (
    <button
      onClick={() => {}}
      className="flex items-center rounded-sm border px-3 py-[6px] hover:bg-gray-100"
    >
      <AddIcon className="text-[22px] text-black" />
      <span className="px-2 text-[15px] font-medium">Upload</span>
    </button>
  )
}

export default Upload
