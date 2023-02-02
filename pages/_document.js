import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>  
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
        <link rel="manifest" href="favicon/site.webmanifest"/>  
        {/* <!-- Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap" rel="stylesheet"/> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head> 
      <body className="bg-[url('/main/cloud.jpg')] bg-center bg-no-repeat bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
