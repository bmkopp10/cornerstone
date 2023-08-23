import Head from 'next/head'
import Script from 'next/script'
import styles from './layout.module.css'
import { PropsWithChildren } from 'react'
import NavigationHeader from './navigation/NavigationHeader'
import Footer from './footer/Footer'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

  const navigationHeight = 100

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap" rel="stylesheet" />


        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <NavigationHeader height={navigationHeight} />
      <main style={{ paddingTop: navigationHeight }}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;