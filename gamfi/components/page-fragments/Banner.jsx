import BannerImage from "../../public/images/svg/bunny.svg"
import bannerCss from "../../styles/banner.module.css"
import indexCss from "../../styles/index.module.css"
import bgImage from "../../public/images/bg/V3_Banner_BG.png"
import Link from 'next/link'
import Image from "next/image"
export default function Banner(){
    return(<>
    <style jsx>
        {
            `
            h1,h2,h3,h4,p,div{
                font-family: 'Comic Sans MS', 'Comic Sans'!mportant;
            }

            .sc_banner_V3_left h2{
                -webkit-background-clip: text;
                background-clip: text;
                background-image: linear-gradient( 109.22deg, #4eecac, #8dc7ed 90.86%, #8285f0 125.51% );
                color: transparent;
            }
            
            `
        }
    </style>
    
    <div id="sc-banner" style={{
        background: `url(${bgImage.src})`,
    }} className="sc_banner_V3 banner-bg position-relative">
            <div className="container">
                <div className="banner-content V3_BanerContent">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sc_banner_V3_left" style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}}>
                                <h2 className={`${bannerCss.bannerH2} bannerH2 wow fadeInUp`} data-wow-delay="0.4s" data-wow-duration="0.6s">BETASPACE <br/> STAKE-TO <span><img src="/images/icons/dollar-dollar-color.svg" alt="" className="img-fluid" /></span> EARN COMMUNITY OWNED <span><img src="/images/icons/rocket-dynamic-color.svg" alt="" className="img-fluid" /></span></h2>
                                <p className="wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s" style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}}>Largest community token allowing Crowd Funding on BNB Chain . It Facilitates a secrured crowd funding system for the community and Charity. HOLDERS of $FIN would be rewareded in BUSD and and iFIN for thier contributions to the growth of $FIN.</p>
                                <div className="gamfi_V2_hero_Btns wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                    <a href="project.html">
                                       <button type="button" className="readon white-btn hover-shape VIEW_Projects_Btn">
                                           <span className="btn-text" style={{fontFamily: "'Comic Sans MS', 'Comic Sans'", background: "#00D1" }}>VIEW Projects</span>
                                           <span className="hover-shape1"></span>
                                           <span className="hover-shape2"></span>
                                           <span className="hover-shape3"></span>
                                       </button>
                                    </a>
                                    <Link href={'/Igo'}>                                    
                                    <a className={`${indexCss.fiFont} readon black-shape Apply_Project_Btn`} href="igo-apply.html">
                                        <span className={`${indexCss.fiFont} btn-text`}>Apply Project</span>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span>
                                    </a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sc_banner_V3_right">
                                <div className="Animetion_Avater">
                                    {/* <BannerImage/> */}
                                    <img src="/images/svg/bunny.svg" alt="img" className="img-fluid"  layout="fill"/>
                                    {/* <img src="/images/homeV3/animition_avater.png" alt="img" className="img-fluid" /> */}
                                </div>
                                <ul className={`${indexCss.fiFont}`}>
                                    <li>
                                        <h3 className={`${indexCss.fiFont}`}>Market Cap</h3>
                                        <h4 className={`${indexCss.fiFont} counter-number `}>$<span className={`${indexCss.fiFont} counter`}>490.88</span> M</h4>
                                    </li>
                                    <li>
                                        <h3 className={`${indexCss.fiFont}`}>TVL</h3>
                                        <h4 className={`${indexCss.fiFont} counter-number`}>$<span className={`${indexCss.fiFont} counter`}>38.60</span> M</h4>
                                    </li>
                                    <li className="m-0">
                                        <h3 className={`${indexCss.fiFont}`}>Fund Raised</h3>
                                        <h4 className={`${indexCss.fiFont} counter-number`}>$<span className="counter">160.48</span> M</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Multi_Block_Chains_Sect">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="Multi_Block_Chains_Left">
                                <h3 className={`${indexCss.fiFont}`}>Supported <span><img src="/images/icons/steps.png" alt="Steps-Image" className="img-fluid" /></span></h3>
                                <h3 className={`${indexCss.fiFont}`}>Multi - Block Chains</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="Multi_Block_Chains_RightSect">
                                <div className="gamfi-partner-section Multi_Block_Chains_Right">
                                    <div className="gamfi-partner-inner Multi_Block_Chains_RightContent">
                                        <div className="partner-image">
                                            <a href="#"><img src="/images/icons/BlockChain1.png" alt="icon" className="img-fluid" /></a>
                                            <a href="#"><img src="/images/icons/BlockChain2.png" alt="icon" className="img-fluid" /></a>
                                            <a href="#"><img src="/images/icons/BlockChain3.png" alt="icon" className="img-fluid" /></a>
                                            <a href="#"><img src="/images/icons/BlockChain4.png" alt="icon" className="img-fluid" /></a>
                                        </div>
                                        <div className="partner-image">
                                            <a href="#"><img src="/images/icons/BlockChain5.png" alt="icon" className="img-fluid" /></a>
                                            <a href="#"><img src="/images/icons/BlockChain6.png" alt="icon" className="img-fluid" /></a>
                                            <a href="#"><img src="/images/icons/BlockChain3.png" alt="icon" className="img-fluid" /></a>
                                            <a href="#"><img src="/images/icons/BlockChain2.png" alt="icon" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="redBordergradient"></span>
                <span className="greenBordergradient"></span>
            </div>
            <div className="Ufo_Img wow slideInLeft" data-wow-delay="300ms" data-wow-duration="2500ms">
                <img src="/images/homeV3/uFO.png" alt="ufo" className="img-fluid" />
            </div>
    </div>
    
    
    </>)
}
