import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from 'context/GlobalContext'
import Header from '@components/layout/header'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GlobalProvider>
      <Header/>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
