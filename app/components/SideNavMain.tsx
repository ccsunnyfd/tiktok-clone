import MenuItem from './MenuItem'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import MenuItemFollow from './MenuItemFollow'

const SideNavMain = () => {
  return (
    <div className="fixed z-20 h-full w-[75px] overflow-auto border-r bg-white pt-[70px] lg:w-[310px] lg:border-r-0">
      <div className="mx-auto w-[55px] lg:w-full">
        <Link href="/">
          <MenuItem name="For You" color="#F02C56">
            <HomeIcon className="text-[30px] text-[#F02C56]" />
          </MenuItem>
        </Link>
        <MenuItem name="Following" color="#000000">
          <PeopleAltOutlinedIcon className="text-[27px] text-black" />
        </MenuItem>
        <MenuItem name="LIVE" color="#000000">
          <LiveTvOutlinedIcon className="text-[27px] text-black" />
        </MenuItem>

        <div className="mt-2 border-b lg:ml-2" />

        <div className="hidden px-2 pb-2 pt-4 text-xs font-semibold text-gray-600 lg:block">
          Suggested accounts
        </div>

        <div className="block pt-3 lg:hidden" />

        <div>
          <div className="cursor-pointer">
            <MenuItemFollow />
          </div>
        </div>

        <button className="hidden pl-2 pt-1.5 text-[13px] text-[#F02C56] lg:block">
          See all
        </button>

        <div>
          <div className="mt-2 border-b lg:ml-2" />

          <div className="hidden px-2 pb-2 pt-4 text-xs font-semibold text-gray-600 lg:block">
            Following accounts
          </div>

          <div className="block pt-3 lg:hidden" />

          <div>
            <div className="cursor-pointer">
              <MenuItemFollow />
            </div>
          </div>

          <button className="hidden pl-2 pt-1.5 text-[13px] text-[#F02C56] lg:block">
            See more
          </button>
        </div>
        <div className="mt-2 hidden border-b lg:ml-2 lg:block" />

        <div className="hidden text-[11px] text-gray-500 lg:block">
          <div className="px-2 pt-4">
            About Newsroom TikTok Shop Contact Careers ByteDance
          </div>
          <div className="px-2 pt-4">
            TikTok for Good Advertise Developers Transparency TikTok Rewards
            TikTok Browse TikTok Embeds
          </div>
          <div className="px-2 pt-4">
            Help Safety Terms Privacy Creator Portal Community Guidelines
          </div>
          <div className="px-2 pt-4">© 2023 TikTok</div>
        </div>

        <div className="pb-14"></div>
      </div>
    </div>
  )
}

export default SideNavMain
