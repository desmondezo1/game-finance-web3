import Image from "next/image"
import logo from "../../public/images/logo.png"
import logoDark from "../../public/images/logo-dark.png"
import borderbuttomShape from "../../public/images/megaMenu/border-buttomShape.png"
import indexV1 from "../../public/images/megaMenu/index-V1.png"
import indexV2 from "../../public/images/megaMenu/index-V2.png"
import indexV3 from "../../public/images/megaMenu/index-V3.png"
import indexV4 from "../../public/images/megaMenu/index-V4.png"
import pancake from "../../public/images/icons/pancake.png"
import uniswap from "../../public/images/icons/uniswap.png"
import market from "../../public/images/icons/market.png"
import gate from "../../public/images/icons/gate.png"
import connectPng from "../../public/images/icons/connect.png"
import connectWhite from "../../public/images/icons/connect_white.png"
import Link from "next/link"


export default function Nav(){
    return(<>

    <style jsx>

    {
    `
        .nav-menu{
            font-family: "Comic Sans MS", "Comic Sans";
        }
        .header-menu ul li a{
            font-family: "Comic Sans MS", "Comic Sans";   
        }
    `
    }

    </style>
    
    
    {/* <!--Header Start--> */}
        <header id="gamfi-header" class="gamfi-header-section transparent-header">
            <div class="menu-area menu-sticky">
                <div class="container">
                    <div class="heaader-inner-area d-flex justify-content-between align-items-center">
                        <div class="gamfi-logo-area d-flex justify-content-between align-items-center">
                            <div class="logo">
                                <Link href={'/'}>
                                    <a href="index-2.html">
                                        {/* <Image src={logo} alt="logo" /> */}
                                        <img src="https://financetoken.org/static/financetoken-logo-f7fcf612582ebf134e0d118b5d62670f.svg"/>
                                        </a>
                                </Link>
                            </div>
                            <div class="header-menu">
                                <ul class="nav-menu" style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}}>
                                    <li>
                                        <Link href={'/'}>
                                        <a style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}} >Home</a>
                                        </Link>
                                     </li>
                            
                                    <li>
                                        <Link href={'/staking'}>
                                        <a style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}} >Staking</a>
                                        </Link>
                                    </li>

                                    
                                </ul>
                            </div>
                        </div>
                        <div class="gamfi-btn-area">
                            <ul>
                                <li>
                                    <a id="nav-expander" class="nav-expander bar" href="#">
                                        <div class="bar">
                                            <span class="dot1"></span>
                                            <span class="dot2"></span>
                                            <span class="dot3"></span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <Link href="/signup">
                                    <a style={{
                                        fontFamily: "'Comic Sans MS', 'Comic Sans'", 
                                        fontWeight: 600,
                                        color: "#00D1B8" 
                                        
                                        }} type="button" class="readon hover-shape" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
                                        <span style={{
                                            color: "#00D1B8" 
                                        }} class="btn-text">Sign Up </span>
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <button type="button" style={{ background: "#86cae6"}} className="readon white-btn hover-shape" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <Image src={connectPng} alt="Icon"/> 
                                        <span style={{marginLeft: "10px", fontFamily: "'Comic Sans MS', 'Comic Sans'" , fontWeight: 600 ,   }} class="btn-text">Connect </span>
                                        <span class="hover-shape1"></span>
                                        <span class="hover-shape2"></span>
                                        <span class="hover-shape3"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Canvas Mobile Menu start --> */}
            <nav class="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                <div class="close-btn">
                    <a id="nav-close2" class="nav-close">
                        <div class="line">
                            <span class="line1"></span>
                            <span class="line2"></span>
                        </div>
                    </a>
                </div>
                <div class="sidebar-logo mb-30">
                    <a href="index-2.html">
                        <Image src={logoDark} alt="" />
                    </a>
                </div>
                <ul class="nav-menu">
                    <li class="current-menu-item"><a href="index-2.html">Home</a>
                        <ul class="sub-menu">
                            <li><a href="index-2.html">Home 1</a></li>
                            <li><a href="index2.html">Home 2</a></li>
                            <li><a href="index-V3.html">Home 3</a></li>
                            <li><a href="index-V4.html">Home 4</a></li>
                        </ul>
                    </li>
                    <li><a href="project.html">Projects</a>
                        <ul class="sub-menu">
                            <li><a href="Project-Clasic.html">Projects Clasic 1</a></li>
                            <li><a href="Project-Clasic-2.html">Projects Clasic 2</a></li>
                            <li><a href="project.html">Projects List</a></li>
                            <li><a href="explore.html">Project Grid</a></li>
                            <li><a href="calendar.html">Project Calendar</a></li>
                            <li><a href="project-details.html">Project Details 1</a></li>
                            <li><a href="Project_Details2.html">Project Details 2</a></li>
                            <li><a href="igo-ranking.html">Project Ranking</a></li>
                        </ul>
                    </li>
                    <li><a href="staking.html">Staking</a>
                        <ul class="sub-menu">
                            <li><a href="staking.html">Staking 1</a></li>
                            <li><a href="staking-2.html">Staking 2</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul class="sub-menu">
                            <li class="menu-item-has-children"><a href="project.html">Projects Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="Project-Clasic.html">Projects Clasic 1</a></li>
                                    <li><a href="Project-Clasic-2.html">Projects Clasic 2</a></li>
                                    <li><a href="project.html">Projects List</a></li>
                                    <li><a href="explore.html">Project Grid</a></li>
                                    <li><a href="calendar.html">Project Calendar</a></li>
                                    <li><a href="project-details.html">Project Details 1</a></li>
                                    <li><a href="Project_Details2.html">Project Details 2</a></li>
                                    <li><a href="igo-ranking.html">Project Ranking</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="signin.html">Stake & Farm</a>
                                <ul class="sub-menu">
                                    <li><a href="staking.html">Staking One</a></li>
                                    <li><a href="staking-2.html">Staking Two</a></li>
                                    <li><a href="farm.html">Farming</a></li>
                                    <li><a href="leaderboard.html">Leaderboard</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="signin.html">Other Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="Get-In-touch.html">Contact Us</a></li>
                                    <li><a href="roadMap.html">Roadmap</a></li>
                                    <li><a href="FAQ.html">FAQs</a></li>
                                    <li><a href="igo-apply.html">Apply For Project</a></li>
                                    <li><a href="teamdetails.html">Team Details</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="signin.html">Tokenomics & Tier</a>
                                <ul class="sub-menu">
                                    <li><a href="Tier.html">Tier System 1</a></li>
                                    <li><a href="Tier_v2.html">Tier System 2</a></li>
                                    <li><a href="Tier-V3.html">Tier System 3</a></li>
                                    <li><a href="tokenomics.html">Tokenomics</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="signin.html">Blog & Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="blog_grid.html">Blog Grid</a></li>
                                    <li><a href="blog_clasic.html">Blog Classic</a></li>
                                    <li><a href="blog-details.html">Artcles Details</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children"><a href="signin.html">Auth Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="kyc_process.html">KYC Step 01</a></li>
                                    <li><a href="kyc_process-Step2.html">KYC Step 02</a></li>
                                    <li><a href="kyc_process-Step3.html">KYC Step 03</a></li>
                                    <li><a href="Connect_Wallet.html">Connect Wallet</a></li>
                                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Wallet Module</a></li>
                                    <li><a href="signUp.html">Register</a></li>
                                    <li><a href="signin.html">Login</a></li>
                                    <li><a href="Forget-Password.html">Forgot Password</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Buy Token</a>
                        <ul class="sub-menu">
                            <li><a href="#">PancakeSwap</a></li>
                            <li><a href="#">UniSwap</a></li>
                            <li><a href="#">CoinMarketCap</a></li>
                            <li><a href="#">Gate.io</a></li>
                        </ul>
                    </li>
                    <li>
                        <button type="button" class="readon black-shape-big connectWalletBtnforMobile" data-bs-toggle="modal" data-bs-target="#exampleModal"><Image src={connectWhite} alt="Icon" />
                            <span class="btn-text">Connect </span>
                            <span class="hover-shape1"></span>
                            <span class="hover-shape2"></span>
                            <span class="hover-shape3"></span>
                        </button>
                    </li>
                </ul>
            </nav>
            {/* <!-- Canvas Menu end --> */}
        </header>
    
    
    </>)
}