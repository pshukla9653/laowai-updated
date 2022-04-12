import Header from '../components/shared/header'
import '../styles/main.scss'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const PixiStage = dynamic(() => import('../components/pixi/stage'), {ssr: false})

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#55796b"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <PixiStage/>
      <div className={'container'}>
        <Header/>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
