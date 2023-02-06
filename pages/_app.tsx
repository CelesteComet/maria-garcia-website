import type { AppProps } from 'next/app'
import { Quattrocento } from '@next/font/google'
import '../styles/globals.css'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Head from 'next/head'
// If loading a variable font, you don't need to specify the font weight
const quatro =
  Quattrocento({
    weight: '400',
  })
export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  const titleContent = `${process.env.name} Realtor | Mony Nop Team at Compass}`;
  return (
    <div>
      <Head>
        <title>{titleContent}</title>
        <meta name="title" content={titleContent} />
        <meta name="description" content="Maria Garcia Realtor" />
        <meta property="og:title" content={titleContent} key="title" />
      </Head>          
      <main
    className={
      quatro.className
    }
  >
    <Navigation />
    <Component
      {...pageProps}
    />
    <Footer />
  </main>
  </div>

  )
}
