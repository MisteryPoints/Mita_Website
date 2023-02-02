import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react' 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  const [faceActive, setFaceActive] = useState(false)
  const [youActive, setYouActive] = useState(false)
  const [contActive, setContActive] = useState(false) 

  return (
    <footer className='absolute bottom-0 w-full bg-[#214194] '>
      <div className="h-[90px] w-full flex items-center justify-center"> 
        <Link href="https://www.facebook.com/CongregacionMita" className=''>
          <div className="inline-block h-[60px] w-[60px] float-left my-0 mx-[5px] overflow-hidden bg-white rounded-[50px] cursor-pointer shadow-md ease-out transition-all hover:w-[200px]"  onMouseEnter={() => setFaceActive(true)} onMouseLeave={() => setFaceActive(false)}>
            <div className={classNames( faceActive ? "bg-[#4267b2]" : "", "inline-block h-[60px] w-[60px] text-center rounded-[50px] box-border leading-[60px] ease-out transition-all")}>
              <svg className={classNames( faceActive ? "fill-[white]" : "", "inline-block h-[25px] w-[25px] text-center justify-center")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
            </div>
            <span className='text-[20px] font-[500] leading-[50px] ml-[10px] ease-out transition-all text-[#4267b2]'>Facebook</span>
          </div>
        </Link> 

        <Link href="https://www.youtube.com/@CongregacionMitaInc/videos" className=''>
          <div className="inline-block h-[60px] w-[60px] float-left my-0 mx-[5px] overflow-hidden bg-white rounded-[50px] cursor-pointer shadow-md ease-out transition-all hover:w-[200px]" onMouseEnter={() => setYouActive(true)} onMouseLeave={() => setYouActive(false)}>
            <div className={classNames( youActive ? "bg-red-600" : "", "inline-block h-[60px] w-[60px] text-center rounded-[50px] box-border leading-[60px] ease-out transition-all")}>
              <svg className={classNames( youActive ? "fill-[white]" : "", "inline-block h-[25px] w-[25px] text-center justify-center")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </div>
            <span className='text-[20px] font-[500] leading-[50px] ml-[10px] ease-out transition-all text-red-600'>Youtube</span>
          </div>
        </Link>
      
        <Link href="#" className=''>
          <div className="inline-block h-[60px] w-[60px] float-left my-0 mx-[5px] overflow-hidden bg-white rounded-[50px] cursor-pointer shadow-md ease-out transition-all hover:w-[200px]"  onMouseEnter={() => setContActive(true)} onMouseLeave={() => setContActive(false)}>
            <div className={classNames( contActive ? "bg-[#E1306C]" : "", "inline-block h-[60px] w-[60px] text-center rounded-[50px] box-border leading-[60px] ease-out transition-all")}>
              <svg className={classNames( contActive ? "fill-[white]" : "", "inline-block h-[25px] w-[25px] text-center justify-center")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            </div>
            <span className='text-[20px] font-[500] leading-[50px] ml-[10px] ease-out transition-all text-[#E1306C]'>Contacto</span>
          </div>
        </Link> 
      </div>

      <div className="w-full flex items-center justify-center h-[80px] bottom-0">
        <p className='after:absolute after:w-[40%] after:h-[10px] after:bg-[#DF6E8E] after:mt-[-30px] after:right-0 before:rounded-tr-[2.5px] before:rounded-br-[2.5px] before:absolute before:w-[40%] before:h-[10px] before:bg-[#DF6E8E] before:mt-[20px] before:left-0 after:rounded-tl-[2.5px] after:rounded-bl-[2.5px]'> 
          <Image src="/main/logo.png" height={50} width={50} />
        </p>
      </div>

      <div className="footer-bottom">
        <p>Congregación Mita Inc. Copyright © 2023 Derechos Reservados. Términos y Condiciones</p>
      </div>
    </footer>
  )
}
