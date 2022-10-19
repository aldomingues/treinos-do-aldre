import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from 'context/GlobalContext'
import Header from '@components/layout/header'
import DevBtn from '@components/layout/dev_btn'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GlobalProvider>
      {/* <Header/> */}
      <Component {...pageProps} />

      <DevBtn/>
    </GlobalProvider>
  )
}

export default MyApp
