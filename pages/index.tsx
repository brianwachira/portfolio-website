import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi, I am Brian Wachira</title>
        <meta name="description" content="I build for the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main>
        <p>Landing page here</p>
      </main>
    </>
  )
}
