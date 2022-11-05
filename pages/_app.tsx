import '../styles/globals.css'
import '../styles/header.css'
import '../styles/feed.css'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'

import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='space-y-12 justify-between min-h-screen'>
      <div className='App bg-slate-900 mx-auto min-h-[85vh]'>
        <Header />
        <Component {...pageProps} />
      </div>
      <footer className={styles.footer}>
        <a rel="noreferrer" target="_blank" href='https://github.com/wbLoki'>Powered by wbLoki</a>
      </footer>
    </div>
  )
}
