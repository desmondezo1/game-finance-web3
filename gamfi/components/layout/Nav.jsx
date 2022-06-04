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
import useStore from "../../utility/store"
import { useState } from "react"


export default function Nav(){
    const expand = useStore(state => state.expandMobileNav);

    const openMobileMenu = () => {
        let navexpander = document.querySelectorAll("#nav-expander");
        let bodyTag = document.querySelectorAll('body');
        expand("nav-expanded");
        
        // if(navexpander.length){
        //    useStore(state => state.expandMobileNav);
        // }
    }

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
        <header id="gamfi-header" className="gamfi-header-section transparent-header">
            <div className="menu-area menu-sticky">
                <div className="container">
                    <div className="heaader-inner-area d-flex justify-content-between align-items-center">
                        <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <Link href={'/'}>
                                    <a >
                                        {/* <Image src={logo} alt="logo" /> */}
                                        <img src="https://financetoken.org/static/financetoken-logo-f7fcf612582ebf134e0d118b5d62670f.svg"/>
                                        </a>
                                </Link>
                            </div>
                            <div className="header-menu">
                                <ul className="nav-menu" style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}}>
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
                                    <li>
                                        <Link href={'https://financetoken.org/'}>
                                        <a style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}} >Fin Deck</a>
                                        </Link>
                                    </li>

                                    
                                </ul>
                            </div>
                        </div>
                        <div className="gamfi-btn-area">
                            <ul>
                                <li>
                                    <span id="nav-expander" className="nav-expander bar" onClick={openMobileMenu} href="#">
                                        <div className="bar">
                                            <span className="dot1"></span>
                                            <span className="dot2"></span>
                                            <span className="dot3"></span>
                                        </div>
                                    </span>
                                </li>

                                <li className="buy-token">
                                <Link href="/signup">
                                    <a style={{
                                        fontFamily: "'Comic Sans MS', 'Comic Sans'", 
                                        fontWeight: 600,
                                        border: "2px solid #00D1B8",
                                        borderRadius: "10px",
                                        color: "#00D1B8" 
                                        
                                        }} className="readon black-shape" >
                                        <span className="btn-text" 
                                        style={{
                                            color: "#00D1B8" 
                                        }}>Sign Up </span>
                                        {/* <i className="icon-arrow_down"></i>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span> */}
                                    </a>
                                    </Link>
                                    <ul>
                                        <li><a href="#"><img src="/images/icons/pancake.png" alt="pancake" /> PancakeSwap</a></li>
                                        <li><a href="#"><img src="/images/icons/uniswap.png" alt="uniswap" /> UniSwap</a></li>
                                        <li><a href="#"><img src="/images/icons/market.png" alt="market" /> CoinMarketCap</a></li>
                                        <li><a href="#"><img src="/images/icons/gate.png" alt="gate" /> Gate.io</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" style={{ background: "#86cae6",  borderRadius: "10px",}} className="readon white-btn hover-shape" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <Image src={connectPng} alt="Icon"/> 
                                        <span style={{marginLeft: "10px", fontFamily: "'Comic Sans MS', 'Comic Sans'" , fontWeight: 600 ,  borderRadius: "10px",  }} className="btn-text">Connect </span>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Canvas Mobile Menu start --> */}
            <nav className="right_menu_togle mobile-navbar-menu" onClick={()=>{expand("")}} id="mobile-navbar-menu">
                <div className="close-btn">
                    <a id="nav-close2" className="nav-close">
                        <div className="line">
                            <span className="line1"></span>
                            <span className="line2"></span>
                        </div>
                    </a>
                </div>
                <div className="sidebar-logo mb-30">
                    <Link href={'/'}>
                    <a>
                    <img src="https://financetoken.org/static/financetoken-logo-f7fcf612582ebf134e0d118b5d62670f.svg"/>
                    </a>
                    </Link>
                </div>
                <ul className="nav-menu">
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
                <li>
                    <Link href={'https://financetoken.org/'}>
                    <a style={{fontFamily: "'Comic Sans MS', 'Comic Sans'"}} >Fin Deck</a>
                    </Link>
                </li>

                    <li className="menu-item-has-children">
                    <Link href="/signup">
                                    <a style={{
                                        fontFamily: "'Comic Sans MS', 'Comic Sans'", 
                                        fontWeight: 600,
                                        border: "2px solid #00D1B8",
                                        borderRadius: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#00D1B8" 
                                        
                                        }} className="readon black-shape" >
                                        <span className="btn-text" 
                                        style={{
                                            color: "#00D1B8" 
                                        }}>Sign Up </span>
                                        {/* <i className="icon-arrow_down"></i>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span> */}
                                    </a>
                                    </Link>
                        {/* <ul className="sub-menu">
                            <li><a href="#">PancakeSwap</a></li>
                            <li><a href="#">UniSwap</a></li>
                            <li><a href="#">CoinMarketCap</a></li>
                            <li><a href="#">Gate.io</a></li> */}
                        {/* </ul> */}
                    </li>
                    <li>
                        <button type="button" style={{ background: "#86cae6",  borderRadius: "10px",}} className="readon black-shape-big connectWalletBtnforMobile" data-bs-toggle="modal" data-bs-target="#exampleModal"><Image src={connectWhite} alt="Icon" />
                            <span style={{marginLeft: "10px", fontFamily: "'Comic Sans MS', 'Comic Sans'" , fontWeight: 600 ,  borderRadius: "10px",  }}  className="btn-text">Connect </span>
                            <span className="hover-shape1"></span>
                            <span className="hover-shape2"></span>
                            <span className="hover-shape3"></span>
                        </button>
                    </li>
                </ul>
            </nav>
            {/* <!-- Canvas Menu end --> */}
        </header>
    
    
    </>)
}