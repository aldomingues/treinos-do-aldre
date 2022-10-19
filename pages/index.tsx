import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meu App Aqui</title>
        <meta name="description" content="Site desenvolvido para treino" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Link href={'itens'}>Iniciar</Link>
    </div>
  )
}

export default Home
