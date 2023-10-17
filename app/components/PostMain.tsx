import Image from 'next/image'
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined'
import Video from './Video'

const PostMain = () => {
  return (
    <div className="flex border-b py-6">
      <div className="cursor-pointer">
        <div className="relative h-[60px] w-[60px]">
          <Image
            className="rounded-full"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            src="https://picsum.photos/id/83/300/320.jpg"
            alt="profile picture"
          />
        </div>
      </div>
      <div className="w-full px-4 pl-3">
        <div className="flex items-center justify-between pb-0.5">
          <button>
            <span className="cursor-pointer font-bold hover:underline">
              User name
            </span>
            <span className="text-light cursor-pointer pl-1 text-[13px] text-gray-500">
              User name
            </span>
          </button>

          <button className="rounded-md border border-[#F02C56] px-[21px] py-0.5 text-[15px] font-semibold text-[#F02C56] hover:bg-[#ffeef2]">
            Follow
          </button>
        </div>
        <div className="max-w-[300px] break-words pb-0.5 text-[15px] md:max-w-[400px]">
          post text
        </div>
        <div className="pb-0.5 text-[14px] text-gray-500">
          #fun #cool #SuperAwesome
        </div>
        <div className="flex items-center pb-0.5 text-[14px] font-semibold">
          <AudioFileOutlinedIcon className="text-[17px]" />
          <div className="px-1">original sound - AWESOME</div>
          <FavoriteOutlinedIcon className="text-[20px]" />
        </div>

        <div className="mt-2.5 flex">
          <Video src="/cat.mp4" img="/tiktok-logo-white.png" />
          <div className="relative mr-[75px]">
            <div className="absolute bottom-0 pl-2">
              <div className="pb-4 text-center">
                <button className="cursor-pointer rounded-full bg-gray-200 p-2">
                  <FavoriteOutlinedIcon className="text-[25px]" />
                </button>
                <span className="text-xs font-semibold text-gray-800">14</span>
              </div>

              <div className="pb-4 text-center">
                <div className="cursor-pointer rounded-full bg-gray-200 p-2">
                  <TextsmsOutlinedIcon className="text-[25px]" />
                </div>
                <span className="text-xs font-semibold text-gray-800">43</span>
              </div>

              <div className="text-center">
                <div className="cursor-pointer rounded-full bg-gray-200 p-2">
                  <RedoOutlinedIcon className="text-[25px]" />
                </div>
                <span className="text-xs font-semibold text-gray-800">55</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostMain
