
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <title>GamFi - Metaverse Web3 IGO/IDO Token Launchpad HTML5 Template</title>
        <meta name="description" content="" />
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}