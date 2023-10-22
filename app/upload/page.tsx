import { Icons } from '../components/Icons'
import UploadComp from './components/UploadComp'

const Page = () => {
  // const [isUploading, setIsUploading] = useState(false)

  const clearVideo = () => {}

  return (
    <>
      {/* loading status cover view */}
      {false ? (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
          <Icons.Loader2 className="ml-1 animate-spin text-[100px] text-white" />
        </div>
      ) : (
        <></>
      )}

      <UploadComp />
    </>
  )
}

export default Page
