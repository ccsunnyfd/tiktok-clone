import { FC, ReactNode } from 'react'

type MenuItemProps = {
  name: string
  color: string
  children: ReactNode
}

const MenuItem: FC<MenuItemProps> = ({ name, color, children }) => {
  return (
    <div className="flex w-full items-center rounded-md p-2.5 hover:bg-gray-100">
      <div className="mx-auto flex items-center lg:mx-0">
        {children}
        <span
          className={`mt-0.5 hidden pl-[9px] text-[17px] font-semibold lg:block text-[${color}]`}
        >
          {name}
        </span>
      </div>
    </div>
  )
}

export default MenuItem
