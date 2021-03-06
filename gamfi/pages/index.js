import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/page-fragments/Banner'
import PreviousSection from '../components/page-fragments/previous-section'
import HowToParticipate from '../components/page-fragments/HowToParticipate'
import KeyPointsSection from '../components/page-fragments/keyPointsSection'
import FaqSection from '../components/page-fragments/faqSection'
import Footer from '../components/layout/Footer'
import Modal from '../components/page-fragments/modal'
import { useEffect } from 'react'
import useStore from '../utility/store'


// import "../public/js/modernizr-2.8.3.min.js"
// import "../public/js/jquery.min.js"
// <!-- Bootstrap v4.4.1 js -->
// import "../public/js/bootstrap.min.js"
// // <!-- popup.min js -->
// import "../public/js/jquery.magnific-popup.min.js"
// // <!-- imagesloaded.pkgd.min js -->
// import "../public/js/imagesloaded.pkgd.min.js"
// // <!-- wow js -->
// import "../public/js/wow.min.js"

// // <!-- jquery counterup js -->
// import "../public/js/jquery.counterup.min.js"
// // <!-- counter top js -->

export default function Home() {


  return (
    <>

    {/* <div className='container'> */}

        {/* <!--Preloader area start here-->
        <section className="loader_first">
            <div className="circular-spinner"></div>
        </section> */}
        {/* <!--Preloader area End here--> */}
        <Banner />
        <PreviousSection/>
        <HowToParticipate />
        <KeyPointsSection />
        <FaqSection />
        <Modal />
        <Footer />
      {/* </div> */}
    </>
  )
}
