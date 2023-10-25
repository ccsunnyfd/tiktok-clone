'use client'

import { ChangeEventHandler } from 'react'

type TextInputProps = {
  text: string | null
  placeholder: string
  inputType: string
  max: number
  autoFocus?: boolean
  error?: string
  onTextChange: ChangeEventHandler<HTMLInputElement>
}

const TextInput = ({
  text,
  placeholder,
  inputType,
  max,
  autoFocus = false,
  error = '',
  onTextChange,
}: TextInputProps) => {
  return (
    <div>
      <input
        value={text || ''}
        placeholder={placeholder}
        className="block  w-full rounded-md  border  border-gray-300  bg-[#F1F1F2] px-3 py-2.5  text-gray-800  focus:outline-none"
        type={inputType}
        autoComplete="off"
        maxLength={max}
        autoFocus={autoFocus}
        onChange={(e) => onTextChange(e)}
      />
      {error ? (
        <span className="text-[14px] font-semibold text-red-500">error</span>
      ) : (
        <></>
      )}
    </div>
  )
}

export default TextInput
