import TopNav from '../components/TopNav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNav />
      {children}
    </>
  )
}
