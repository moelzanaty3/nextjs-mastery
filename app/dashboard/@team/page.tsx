import { Suspense } from "react"
import Loading from "./loading"

export default async function Team() {
  // simulate loading time for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <p>Hello From Team Page Loaded</p>
      </main>
    </Suspense>
  )
}
