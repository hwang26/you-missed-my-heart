import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Form from '../components/Form'

export default function Home() {
  return (
    <div>
      <Head>
        <title>You Missed My Heart</title>
        <meta name="description" content="Twitter bot that generates Phoebe Bridgers lyrics with an attached image." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
      </main>

    </div>
  )
}
