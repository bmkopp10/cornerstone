import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';


const Container = () => {
  return (
    <Layout>
      <Home />

    </Layout>

    // <BrowserRouter>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default Container;