import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 KickStarter</title>
        <meta
          name="description"
          content="Decentralized crowdfund application running on Ethereum network."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
