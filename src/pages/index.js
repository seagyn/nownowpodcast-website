import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Now Now Podcast</title>
      </Head>
      <p className="text-white text-xl mb-10">Now Now is a podcast by two friends, Andrew Lima and Seagyn Davis, who like talking about tech, the internet, startups, and investing. We share our life experiences and what we're currently doing to motivate you to do the same.</p>
      <h2 className="text-white text-3xl font-bold mb-8">Latest Podcast</h2>
      <iframe src="https://anchor.fm/nownow/embed/episodes/Ep-0---Prologue-eqtols" height="102px" className="w-full" frameborder="0" scrolling="no"></iframe>
    </>
  )
}
