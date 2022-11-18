import '../styles/globals.css'
import '../styles/header.css'
import '../styles/feed.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='sm:space-y-12 justify-between min-h-screen bg-[#0F172A]/75 backdrop-brightness-50 overflow-hidden'>
      <div className='App mx-auto min-h-[85vh]'>
      <Head>
        <title>Gaming Area</title>
        <meta name="description" content="Gaming Area website" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
        <Header />
        <Component {...pageProps} />
      </div>
      <footer className={styles.footer}>
        <a rel="noreferrer" target="_blank" href='https://github.com/wbLoki'>Powered by wbLoki</a>
      </footer>
    </div>
  )
}
