import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ThemeHandler from '@components/layout/themeHandler'

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
