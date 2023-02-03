import Head from 'next/head' 
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <>
      <Head> 
        <title>Congregación Mita Inc.</title> 
      </Head>   
      <Navbar/>  
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner carouselSize">
          <div className="carousel-item active">
            <Image width={1500} height={720} className="w-[100%]" src="/main/carousel1.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <Image width={1500} height={720} className="w-[100%]" src="/main/carousel2.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <Image width={1500} height={720} className="w-[100%]" src="/main/carousel3.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Footer/>
    </>
  )
}
