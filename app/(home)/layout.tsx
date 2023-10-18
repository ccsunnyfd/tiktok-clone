import TopNav from '@/app/components/TopNav'
import SideNavMain from '@/app/components/SideNavMain'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNav />
      <div className="mx-auto flex w-full max-w-[1140px] justify-between px-0 lg:px-2.5">
        <div>
          <SideNavMain />
        </div>
        {children}
      </div>
    </div>
  )
}
