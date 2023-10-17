import Image from 'next/image'
import CheckIcon from '@mui/icons-material/Check'

const MenuItemFollow = () => {
  return (
    <div className="flex w-full items-center rounded-md px-2 py-1.5 hover:bg-gray-100">
      <div className="relative h-9 w-[35px]">
        <Image
          className="mx-auto rounded-full lg:mx-0"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
          src="https://picsum.photos/id/83/300/320.jpg"
          alt="profile picture"
        />
      </div>

      <div className="hidden lg:block lg:pl-2.5">
        <div className="flex items-center">
          <div className="text-[14px] font-bold">user name</div>
          <div className="relative ml-1 h-[14px] rounded-full bg-[#58D5EC]">
            <CheckIcon className="relative -top-[7px] text-[15px] text-white" />
          </div>
        </div>

        <div className="text-[12px] font-light text-gray-600">user name</div>
      </div>
    </div>
  )
}

export default MenuItemFollow
