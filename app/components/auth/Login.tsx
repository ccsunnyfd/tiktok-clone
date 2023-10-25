import { type ChangeEvent, useCallback, useState } from 'react'
import TextInput from '../TextInput'

type ErrorsType = {
  email?: string[]
}

const Login = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [errors, setErrors] = useState<ErrorsType | null>(null)

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    },
    []
  )

  const login = useCallback(async () => {
    setErrors(null)

    try {
    } catch (err) {
      // setErrors(err?.response.data.errors)
    }
  }, [])

  return (
    <>
      <div className="mb-4 text-center text-[28px] font-bold">Log in</div>
      <div className="px-6 pb-1.5 text-[15px]">Email address</div>

      <div className="px-6 pb-2">
        <TextInput
          text={email}
          placeholder="Email address"
          inputType="email"
          max={30}
          autoFocus
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
          onTextChange={(e) => handlePasswordChange(e)}
        />
      </div>
      <div className="px-6 text-[12px] text-gray-600">Forgot password?</div>

      <div className="mt-6 px-6 pb-2">
        <button
          disabled={!email || !password}
          className={`${
            !email || !password ? 'bg-gray-200' : 'bg-[#F02C56]'
          } w-full rounded-sm py-3 text-[17px] font-semibold text-white`}
          onClick={() => login()}
        >
          Log in
        </button>
      </div>
    </>
  )
}

export default Login
