import { type ChangeEvent, useCallback, useState } from 'react'
import TextInput from './TextInput'

type ErrorsType = {
  name?: string[]
  email?: string[]
  password?: string[]
  confirmPassword?: string[]
}

const Register = () => {
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
  const [errors, setErrors] = useState<ErrorsType | null>(null)

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    },
    []
  )
  const handleConfirmPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value)
    },
    []
  )

  const register = useCallback(async () => {
    setErrors(null)

    try {
    } catch (err) {
      // setErrors(err?.response.data.errors)
    }
  }, [])

  return (
    <>
      <div className="mb-4 text-center text-[28px] font-bold">Sign up</div>

      <div className="px-6 pb-2">
        <TextInput
          text={name}
          placeholder="Full name"
          inputType="text"
          max={50}
          autoFocus
          error={errors && errors.name ? errors.name[0] : ''}
          onTextChange={(e) => handleNameChange(e)}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          text={email}
          placeholder="Email address"
          inputType="email"
          max={30}
          error={errors && errors.email ? errors.email[0] : ''}
          onTextChange={(e) => handleEmailChange(e)}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          text={password}
          placeholder="Password"
          inputType="password"
          max={50}
          error={errors && errors.password ? errors.password[0] : ''}
          onTextChange={(e) => handlePasswordChange(e)}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          text={confirmPassword}
          placeholder="Confirm password"
          inputType="password"
          max={50}
          error={
            errors && errors.confirmPassword ? errors.confirmPassword[0] : ''
          }
          onTextChange={(e) => handleConfirmPasswordChange(e)}
        />
      </div>
      <div className="px-6 text-[12px] text-gray-600">Forgot password?</div>

      <div className="mt-6 px-6 pb-2">
        <button
          disabled={!name || !email || !password || !confirmPassword}
          className={`${
            !name || !email || !password || !confirmPassword
              ? 'bg-gray-200'
              : 'bg-[#F02C56]'
          } w-full rounded-sm bg-[#F02C56] py-3 text-[17px] font-semibold text-white`}
          onClick={() => register()}
        >
          Sign up
        </button>
      </div>
    </>
  )
}

export default Register
