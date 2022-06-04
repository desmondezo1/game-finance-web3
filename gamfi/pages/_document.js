
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react';
import useStore from '../utility/store'
export default function Document() {
const [navstat, setNavStat] = useState("");


useEffect(()=>{

  //   const navClass = useStore(state => state.navBarExpanded); 
  // setNavStat(navClass);
})

  return (
    <Html>
      <Head>
      <title>Finance Token</title>
        <meta name="description" content="Keeping a balance between Health and Wealth" />
        {/* <!-- responsive tag --> */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- favicon --> */}
        <link rel="apple-touch-icon" href="apple-touch-icon.html" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/fav.png" />

        <link rel="stylesheet" href="styles/css/bootstrap.min.css" />
        {/* <!-- animate css --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/animate.css" />
        {/* <!-- magnific css --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/magnific-popup.css" />
        {/* <!-- owl.carousel css --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/owl.carousel.css" />
        {/* <!-- off canvas css --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/off-canvas.css" />
        {/* <!-- flaticon css  --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/ico-moon-fonts.css" />
        {/* <!--Slick Slider CSS --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/slick.css" />
        <link rel="stylesheet" href="styles/css/slick-theme.min.css" />
        {/* <!-- spacing css --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/sc-spacing.css" />
        {/* <!-- style css --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/style.css" />
        {/* <!-- responsive css --> */}
        <link rel="stylesheet" type="text/css" href="styles/css/responsive.css" />
      </Head>
      <body style={{
        backgroundColor: "#151625",
        fontFamily: "'Comic Sans MS', 'Comic Sans'",
        right: "0 !important"

      }}>
        <Main />
     
        <NextScript />
      </body>

      <script async src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.js"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script async src="public/js/main.js"></script>
    </Html>
  )
}
