'use client'

import { useState, useMemo, useCallback } from 'react'

const useUploadForm = () => {
  // 收集表单数据
  const [caption, setCaption] = useState<string>('')
  // 收集表单数据
  const [fileData, setFileData] = useState<File | null>(null)
  // 收集表单错误
  const [errors, setErrors] = useState({})
  // 页面警告条消息
  const [warning, setWarning] = useState<string | null>(null)

  const validators = useMemo<{
    [key: string]: (value: any) => string | null
  }>(() => {
    return {
      caption: (value: string) => {
        if (value.length > 150) return 'Maximum 150 characters.'
        return null
      },
      'file-data': (file: File | null) => {
        if (file) {
          const extention = file.name.substring(file.name.lastIndexOf('.') + 1)
          if (extention !== 'mp4') return 'Unsupported file. Use MP4 instead.'
        }
        return null
      },
    }
  }, [])

  const validateField = useCallback(
    (name: string, value: any) => {
      if (validators[name]) {
        const errMsg = validators[name](value)
        setErrors((errors) => ({
          ...errors,
          [name]: errMsg || null,
        }))
        setWarning(errMsg || null)
      }
    },
    [validators]
  )

  const changeCaption = useCallback(
    (value: string) => {
      setCaption(value)
      validateField('caption', value)
    },
    [validateField]
  )

  const changeFileData = useCallback(
    (value: File | null) => {
      setFileData(value)
      validateField('file-data', value)
    },
    [validateField]
  )

  const hasError = useMemo(() => {
    return !Object.values(errors).every((v) => v === null)
  }, [errors])

  return {
    caption,
    changeCaption,
    fileData,
    changeFileData,
    errors,
    hasError,
    warning,
  }
}

export default useUploadForm
