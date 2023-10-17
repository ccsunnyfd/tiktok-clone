import Link from 'next/link'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'
import User from './User'
import Upload from './Upload'

const TopNav = () => {
  return (
    <div className="fixed z-30 flex h-[61px] w-full items-center border-b bg-white">
      <div className="mx-auto flex w-full max-w-[1150px] items-center justify-between px-6">
        <div className="w-[80%]">
          <Link href="/">
            <div className="relative h-10 w-[115px]">
              <Image
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
                src="/tiktok-logo.png"
                alt="logo picture"
              />
            </div>
          </Link>
        </div>

        <div className="hidden w-full max-w-[380px] items-center rounded-full bg-[#F1F1F2] p-1 md:flex ">
          <input
            type="text"
            className="my-2 w-full bg-transparent pl-3 text-[15px] placeholder-[#838383] focus:outline-none"
            placeholder="Search accounts"
          />
          <div className="flex items-center border-l border-l-gray-300 px-3 py-1">
            <SearchIcon className="text-[22px] text-[#A1A2A7]" />
          </div>
        </div>

        <div className="flex w-full min-w-[275px] max-w-[320px] items-center justify-end gap-3">
          <Upload />
          <User />
        </div>
      </div>
    </div>
  )
}

export default TopNav
