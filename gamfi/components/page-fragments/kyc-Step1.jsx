import Link from 'next/link'
import indexCss from "../../styles/index.module.css"

export default function KycStep1(){
    return (
        <>
        
        <div  className={`${indexCss.top} kycFormSect`}>
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-6 p-0">
                        <div className="kycForm">
                            <h3>Issuing Country/Region</h3>
                            <div className="kycCountryDropdownSect">
                                <div className="kycCountryDropbox">
                                    <span><img src="/images/kycimg/flag.png" alt="flag" className="img-fluid" /></span>
                                    <h4>United States</h4>
                                </div>
                                <div className="kycCountryDropList">
                                    <ul>
                                        <li>United States</li>
                                        <li>United Kingdom</li>
                                        <li>Japan</li>
                                        <li>China</li>
                                        <li>Germany</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Select Identity Type</h3>
                            <p>Should be your government issued photo identity</p>
                            <div className="KycRadioSect">
                                <div className="KycRadioBtn NidBtn">
                                    <label className="container">national id
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className="Kycicon">
                                        <img src="/images/kycimg/nid-icon.svg" alt="icon" className="imf-fluid" />
                                    </div>
                                </div>
                                <div className="KycRadioBtn PASSPORTBtn active">
                                    <label className="container">PASSPORT
                                        <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className="Kycicon">
                                        <img src="/images/kycimg/pasport_icon.svg" alt="icon" className="imf-fluid" />
                                    </div>
                                </div>
                                <div className="KycRadioBtn DrivinglicnseBtn">
                                    <label className="container">Driver’s licnse
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <div className="Kycicon">
                                        <img src="/images/kycimg/licence-icon.svg" alt="icon" className="imf-fluid" />
                                    </div>
                                </div>
                            </div>
                            <Link href={'step2'}>
                            <a >
                                <div className="project-btn-area text-center black-shape-bigCustom">
                                    <button >Next step</button>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </div>
                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="kycQrcodeSect">
                            <div className="kycQrcode_content">
                                <h2>Want to continue with SmArt Phone ?</h2>
                                <div className="kycQrcodeImg">
                                    <img src="/images/kycimg/QRcode.png" alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}