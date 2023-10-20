const WarningBar = ({ message }: { message: string | null }) => {
  return (
    <div className="relative flex w-[100%] justify-center">
      <div
        className={`fixed top-6 z-50 mx-auto rounded-sm bg-black bg-opacity-70 px-14 py-3 text-white ${
          message ? 'visible' : 'invisible'
        }`}
      >
        {message}
      </div>
    </div>
  )
}

export default WarningBar
