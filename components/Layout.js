import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>Icoffe - {pagina} </title>
            <meta name='description' content='Sitio web de venta de cafe' />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,300&family=PT+Sans:ital,wght@0,700;1,400&display=swap" rel="stylesheet"></link>
        </Head>

      <Navbar/>
        {children}
      <Footer/>

    </div>
  )
}

export default Layout