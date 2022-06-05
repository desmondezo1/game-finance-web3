import indexCss from "../../styles/index.module.css"
import Link from "next/link"

export default function KycStep3(){
    return (
        <>

<div  className={`${indexCss.top} kycFormSect`}>
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-6 p-0">
                        <div className="kycForm kycPersonalinfoForm">
                            <h3>Personal Information</h3>
                            <form action="#">
                                <div className="InputNameSect">
                                    <div className="FirstNameFild">
                                        <lable>First Name</lable>
                                        <input type="text" placeholder="e.g.  Smith" />
                                    </div>
                                    <div className="LastNameFild">
                                        <lable>Last Name</lable>
                                        <input type="text" placeholder="e.g.  Smith" />
                                    </div>
                                </div>
                                <div className="State-ProvienceFild">
                                    <lable>State/Provience </lable>
                                    <input type="text" placeholder="e.g.  California" />
                                </div>
                                <div className="InputAddressSect">
                                    <div className="Address1Fild">
                                        <lable>Address Line 1</lable>
                                        <input type="text" placeholder="e.g.  645 E Shaw Ave" />
                                    </div>
                                    <div className="Address2Fild">
                                        <lable>Address Line 2</lable>
                                        <input type="text" placeholder="e.g.  Fresno, CA 93710," />
                                    </div>
                                </div>
                                
                                <div className="InputCitySect">
                                    <div className="CityFild">
                                        <lable>CITY</lable>
                                        <input type="text" placeholder="e.g.  New York" />
                                    </div>
                                    <div className="PostCodeFild">
                                        <lable>POST CODE</lable>
                                        <input type="text" placeholder="e.g.  4455" />
                                    </div>
                                </div>
                                
                                <div className="KYC_TramsAndCondetionSect">
                                    <label className="container">I accept the <a href="#">Term of Conditions</a> and <a href="#">Privacy Policy</a>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </form>
                            <Link href={'/'} >
                            <a >
                                <div className="project-btn-area text-center black-shape-bigCustom">
                                    <button>Submit KYC</button>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </div>
                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="KycYourDocumentsSect">
                            <div className="KycYourDocumentsContent">
                                <h3>Your Documents</h3>
                                <ul>
                                    <li><p><span><img src="/images/kycimg/iconLink.svg" alt="icon" className="img-fluid" /></span>NID_front.JPG</p> <span className="Downloadicon"><img src="/images/kycimg/icon_download.svg" alt="icon" className="img-fluid" /></span></li>
                                    <li><p><span><img src="/images/kycimg/iconLink.svg" alt="icon" className="img-fluid" /></span>NID_back.JPG</p> <span className="Downloadicon"><img src="/images/kycimg/icon_download.svg" alt="icon" className="img-fluid" /></span></li>
                                    <li><p><span><img src="/images/kycimg/iconLink.svg" alt="icon" className="img-fluid" /></span>Selfie_with_NID.JPG</p> <span className="Downloadicon"><img src="/images/kycimg/icon_download.svg" alt="icon" className="img-fluid" /></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}