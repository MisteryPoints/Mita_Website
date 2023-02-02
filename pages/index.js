import Head from 'next/head' 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <>
      <Head> 
        <title>Congregación Mita Inc.</title> 
      </Head>   
      <Navbar/>  
      <Footer/>
    </>
  )
}
