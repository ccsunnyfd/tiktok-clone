import Image from 'next/image'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import PostUser from './components/PostUser'
import EditButton from './components/EditButton'

const page = () => {
  return (
    <div className="w-[calc(100%-90px)] max-w-[1800px] pr-2 pt-[90px] lg:pl-[310px] lg:pr-0 2xl:mx-auto 2xl:pl-[310px]">
      <div className="flex w-[calc(100vw-230px)]">
        <div className="relative h-[90px] w-[120px] lg:h-[110px]">
          <Image
            className="rounded-full"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            referrerPolicy="no-referrer"
            src="https://picsum.photos/id/83/300/320.jpg"
            alt="profile picture"
          />
        </div>
        <div className="ml-5 w-full">
          <div className="truncate text-[30px] font-bold">User Name</div>
          <div className="truncate text-[18px]">user name</div>
          {true ? (
            <EditButton />
          ) : (
            <button className="item-center mt-3 flex rounded-md bg-[#F02C56] px-8 py-1.5 text-[15px] font-semibold text-white">
              Follow
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center pt-4">
        <div className="mr-4">
          <span className="font-bold">10K</span>
          <span className="pl-1.5 text-[15px] font-light text-gray-500">
            Following
          </span>
        </div>
        <div className="mr-4">
          <span className="font-bold">44K</span>
          <span className="pl-1.5 text-[15px] font-light text-gray-500">
            Followers
          </span>
        </div>
        <div className="mr-4">
          <span className="font-bold">1200+</span>
          <span className="pl-1.5 text-[15px] font-light text-gray-500">
            Likes
          </span>
        </div>
      </div>

      <div className="mr-4 max-w-[500px] pl-1.5 pt-4 text-[15px] font-light text-gray-500">
        bio
      </div>

      <div className="flex w-full items-center border-b pt-4">
        <div className="w-60 border-b-2 border-b-black py-2 text-center text-[17px] font-semibold">
          Videos
        </div>
        <div className="w-60 py-2 text-center text-[17px] font-semibold text-gray-500">
          <LockOpenOutlinedIcon className="mb-0.5" />
          Liked
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <PostUser post={{ video: '/cat.mp4' }} />
        <PostUser post={{ video: '/cat.mp4' }} />
        <PostUser post={{ video: '/cat.mp4' }} />
        <PostUser post={{ video: '/cat.mp4' }} />
        <PostUser post={{ video: '/cat.mp4' }} />
      </div>
    </div>
  )
}

export default page
