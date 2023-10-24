import { Suspense } from "react"
import Loading from "./loading"

export default async function Analytics() {
  // simulate loading time for 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <p>Hello From Analytics Page Loaded</p>
      </main>
    </Suspense>
  )
}
