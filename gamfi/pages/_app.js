import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Nav from '../components/layout/Nav'
import Head from 'next/head'

import "../styles/css/bootstrap.min.css"
import "../styles/css/animate.css";
import "../styles/css/magnific-popup.css"
import "../styles/css/owl.carousel.css" 
import "../styles/css/off-canvas.css"
import "../styles/css/ico-moon-fonts.css"
import "../styles/css/slick.css"
import "../styles/css/slick-theme.min.css" 
import "../styles/css/sc-spacing.css"
import "../styles/css/style.css" 
import "../styles/css/responsive.css"
import { useEffect } from 'react'
import useStore from '../utility/store'

function MyApp({ Component, pageProps }) {

  const navClassVal = useStore(state => state.navBarExpanded);

  useEffect(() =>
  {        
    if(navClassVal){
        document.body.classList.add("nav-expanded");
    }else{
      document.body.classList.remove("nav-expanded");
    }
      
      // document.body.classList.add("text-gray-700");
  });

  return(<>
  <Head>
  <meta charset="utf-8" />
        <title>Finance Token</title>
        <meta name="description" content="" />
        {/* <!-- responsive tag --> */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- favicon --> */}
        <link rel="apple-touch-icon" href="apple-touch-icon.html" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/fav.png" />
        {/* <!-- Bootstrap v4.4.1 css --> */}
        <link rel="stylesheet" href="../styles/css/bootstrap.min.css" />
        {/* <!-- animate css --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/animate.css" /> */}
        {/* <!-- magnific css --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/magnific-popup.css" /> */}
        {/* <!-- owl.carousel css --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/owl.carousel.css" /> */}
        {/* <!-- off canvas css --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/off-canvas.css" /> */}
        {/* <!-- flaticon css  --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/ico-moon-fonts.css" /> */}
        {/* <!--Slick Slider CSS --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/slick.css" /> */}
        {/* <link rel="stylesheet" href="../styles/css/slick-theme.min.css" /> */}
        {/* <!-- spacing css --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/sc-spacing.css" /> */}
        {/* <!-- style css --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/style.css" /> */}
        {/* <!-- responsive css --> */}
        {/* <link rel="stylesheet" type="text/css" href="../styles/css/responsive.css" /> */}
  
  
  </Head>
  <script async
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossOrigin="anonymous"/>
<script src='js/utility/extrajquery.js' />
  <Nav/>

    
  <Component {...pageProps} />
  </>) 
}

export default MyApp
