'use client'

import { type ChangeEventHandler } from 'react'

type CaptionProps = {
  text: string
  onTextChange: ChangeEventHandler<HTMLInputElement>
}

const Caption = ({ text, onTextChange }: CaptionProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="mb-1 text-[15px]">Caption</div>
        <div className="text-[12px] text-gray-400">{text.length}/150</div>
      </div>
      <input
        value={text}
        onChange={onTextChange}
        maxLength={150}
        type="text"
        className="w-full rounded-md border p-2.5 focus:outline-none"
      />
    </>
  )
}

export default Caption
