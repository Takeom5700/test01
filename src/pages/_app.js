import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="app">
    <Head>
      <title>ゆうきさんのためのプログラミング講座</title>
    </Head>
    <Component {...pageProps} />
  </div>
  )
}
