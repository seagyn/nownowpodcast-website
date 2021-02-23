import Image from 'next/image'

import "@/styles/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-now-now min-h-screen">
      <div className="max-w-screen-md mx-auto text-center">
        <Image src="/logo.png" width={200} height={200} alt="Now Now Podcast" title="Now Now Podcast" />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
