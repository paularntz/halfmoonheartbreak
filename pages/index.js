import Head from 'next/head'
import Footer from '@components/Footer'
import YouTube from 'react-youtube'

export default function Home() {

  const opts = {
    playerVars: {
      autoplay: 1,
    },  
  }

  return (
    <div className="container">
      <Head>
        <title>Half Moon Heartbreak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <YouTube 
          videoId="RRfJ7-LLfC4"
          opts={opts}
        />
      </main>
      <Footer />
    </div>
  )
}
