import indexCss from "../../styles/index.module.css"

export default function TeamSection(){
    return (<>
            <div  className={`${indexCss.top} gamfi-team-section gamfi_Our_mentor_section OurPartnarV3_Sect pt-115 pb-85 md-pt-75 md-pb-42`}>
            <div className="container">
                <div className="sec-inner align-items-center d-flex justify-content-between  mb-50">
                    <div className="sec-heading">
                        <div className="sub-inner mb-15">
                            <span className="sub-title">backers</span>
                            <img className="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
                        </div>
                        <h2 className="title mb-0 xs-pb-20">Our PARTNERS</h2>
                    </div>
                    <div className="gamfi-btn-area">
                        <ul className="GamfiV3_ProjectPoolsBtn">
                            <li className="v3_OurPartnars_tablinks m-0" onclick="openV3_OurPartnars(event, 'Investor')" id="V3_OurPartnars_Tab_defaultOpen">
                                <button className="view-more black-shape">
                                    <span className="btn-text">Investor</span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                            <li className="v3_OurPartnars_tablinks" onclick="openV3_OurPartnars(event, 'MEDIA')">
                                <button className="view-more black-shape">
                                    <span className="btn-text">MEDIA</span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Our_PARTNERSContnetSect">
                    <div id="Investor" className="v3_OurPartnars_tabcontent animate_opacity">
                        <ul className="OurPartnatList">
                            <li><img src="/images/partner/1.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/2.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/3.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/4.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/5.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/6.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/7.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/8.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/9.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/10.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/11.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/12.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/13.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/14.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/15.png" alt="logo" className="img-fluid" /></li>
                        </ul>
                    </div>

                    <div id="MEDIA" className="v3_OurPartnars_tabcontent animate_opacity">
                        <ul className="OurPartnatList">
                            <li><img src="/images/partner/7.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/8.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/9.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/4.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image2.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image3.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image4.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image5.png" alt="logo" className="img-fluid" /></li>
                            <li><img src="/images/partner/15.png" alt="logo" className="img-fluid" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="OurPartnat_EathImg">
                <img src="/images/icons/earthBg.svg" alt="img" className="img-fluid" />
            </div>
            <div className="RocketImgBW">
                <img src="/images/icons/rocket.png" alt="img" className="img-fluid" />
            </div>
        </div>
    </>)
}