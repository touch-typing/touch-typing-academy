import '@/styles/globals.css';

import Layout from "../../components/Layout";

import Banner from '../../components/Cards';



export default function App({ Component, pageProps }) {
  return (
<Layout>
 <Component {...pageProps} />
  </Layout>
  
  )
  
 
}
