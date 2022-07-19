import Head from 'next/head'
import Link from "next/link";
import styles from "../styles/Home.module.scss";



export default function Home() {
  return (
    <div >
      <Head>
        <title>Coro Wenzel</title>
        <meta name='description' content="Homepage from caro wenzel" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.home}>
          <div className={styles.header}>
            <h1>Carolin Wenzel</h1>
          </div>

          <div className={styles.enter}>
            <Link href='/about'>
              <a>Enter</a>
            </Link>
          </div>
      </main>

    </div>
  )
}
