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


function MyApp({ Component, pageProps }) {
  return(<>
  <Head>
  <meta charset="utf-8" />
        <title>GamFi - Metaverse Web3 IGO/IDO Token Launchpad HTML5 Template</title>
        <meta name="description" content="" />
        {/* <!-- responsive tag --> */}
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
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
  <Nav/>
  <Component {...pageProps} />
  </>) 
}

export default MyApp
