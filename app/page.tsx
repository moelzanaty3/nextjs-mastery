import Link from "next/link"

export default function Home() {
  return (
    <main>
      <p>Hello From Main</p>
      <Link href="/dashboard" className="text-pink-300">
        Dasboard ➡
      </Link>
    </main>
  )
}
