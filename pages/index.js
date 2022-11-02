import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Header} from "../components/header";

export default function Home() {
  return (
    <div>
        <Header/>
      <Head>
        <title>Financial Advisor</title>
        <meta name="description" content="Finance Management | House-Insurance Health-Insurance | Loans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            <div className='animate-pulse '>Work in Progress...</div>
        </h1>
      </main>
    </div>
  )
}
