import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from 'context/GlobalContext'
import { GlobalStyleRender } from './style'
import { StyleTest } from './style'
import { Theme } from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <GlobalProvider>
      {/* <GlobalStyleRender> */}
      {/* <> */}
        {/* <StyleTest theme={theme}> */}
          <Component {...pageProps} />

        {/* </StyleTest> */}
      {/* </> */}
      {/* </GlobalStyleRender> */}
    </GlobalProvider>

  )
}

export default MyApp
