import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import Home from './Home'

//<Link href={`/posts/${id}`}>{title}</Link>


const Container = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home />
    </Layout>
  )
}

export default Container;