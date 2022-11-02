import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
