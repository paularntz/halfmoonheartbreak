import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import YouTube from 'react-youtube'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Half Moon Heartbreak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <YouTube videoId="RRfJ7-LLfC4" />
      </main>
      <Footer />
    </div>
  )
}
