import Link from 'next/link'
import indexCss from "../../styles/index.module.css"


export default function Footer(){
    return(<>
    
    <div  className={`${indexCss.top} Fin-footer-section`}>
            <div className="container">
                <div className="footer-cta-area text-center active-shape hover-shape-inner">
                    <h2 className="title mb-15">
                        Become an<br />
                        Orchestrator
                    </h2>
                    <div className="dsc mb-40 md-mb-30" style={{
                     color:   "rgba(255, 255, 255, 0.7)"
                    }}>
                        Do you have a health or Charitable NGO? lend a helping hand
                    </div>
                    <Link href={'/iho'}>
                    <a className="banner-btn wow fadeInUp black-shape" data-wow-delay="0.3s" data-wow-duration="0.5s">
                        <span className="btn-text">Apply For IHO</span>
                        <span className="hover-shape1"></span>
                        <span className="hover-shape2"></span>
                        <span className="hover-shape3"></span>
                    </a></Link>
                    <span className="border-shadow shadow-1"></span>
                    <span className="border-shadow shadow-2"></span>
                    <span className="border-shadow shadow-3"></span>
                    <span className="border-shadow shadow-4"></span>
                    <span className="hover-shape-bg hover_shape1"></span>
                    <span className="hover-shape-bg hover_shape2"></span>
                    <span className="hover-shape-bg hover_shape3"></span>
                </div>
            </div>
            <div className="footer-area">
                <div className="container">
                    <div className="sec-heading text-center">
                        <div className="sub-inner mb-52 mb-mb-30">
                            <img className="heading-right-image" src="/images/icons/steps2.png" alt="Steps-Image"/>
                            <span className="sub-title white-color">Find us on Social</span>
                            <img className="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image"/>
                        </div>
                    </div>
                    <div className="footer-listing text-center mb-100 md-mb-70 xs-mb-50">
                        <ul className="footer-icon-list">
                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                            <li><a href="#"><i className="icon-telegram"></i></a></li>
                            <li><a href="#"><i className="icon-medium"></i></a></li>
                            <li><a href="#"><i className="icon-discord"></i></a></li>
                            <li><a href="#"><i className="icon-linkedin"></i></a></li>
                            <li><a href="#"><i className="icon-instagram"></i></a></li>
                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-logo text-center mb-45"> 
                        <img src="/images/logo.png" alt="Footer-logo" />
                    </div>
                    <div className="footer-mainmenu text-center mb-20">
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Token info</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Social media</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="copyright-area text-center mb-0">
                        <div className="dsc mb-37 md-mb-25">Copyright © 2022. All Rights Reserved by 
                            <a target="_blank" className="gafi" href="#">Bunny labs</a>
                        </div>
                    </div>
                    <div className="scrollup text-center">
                        <a href="#Fin-header"><i className="icon-arrow_up"></i></a>
                    </div>
                </div>
            </div>
        </div>
    
    </>)
}
