import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Half Moon Heartbreak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Half Moon Heartbreak" />
        <p className="description">
          <img src="./ValentinesDay2024.pdf" />
        </p>
      </main>
      <Footer />
    </div>
  )
}
