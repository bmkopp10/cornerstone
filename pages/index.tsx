import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Home from './Home'

//<Link href={`/posts/${id}`}>{title}</Link>


const Container = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home />
    </Layout>
  )
}

export default Container;