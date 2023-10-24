import Link from "next/link"

export default function DashBoardLayout(props: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      <nav>
        <Link href="/" className="text-pink-300">
          Main
        </Link>
        <Link href="/dashboard" className="text-pink-300 ml-1">
          Dashboard
        </Link>
        <Link href="/dashboard/settings" className="text-pink-300 ml-1">
          Settings
        </Link>
      </nav>
      {props.children}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">{props.team}</div>
        <div className="p-4">{props.analytics}</div>
      </div>
    </>
  )
}
