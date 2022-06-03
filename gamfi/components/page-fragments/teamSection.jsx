export default function TeamSection(){
    return (<>
            <div class="gamfi-team-section gamfi_Our_mentor_section OurPartnarV3_Sect pt-115 pb-85 md-pt-75 md-pb-42">
            <div class="container">
                <div class="sec-inner align-items-center d-flex justify-content-between  mb-50">
                    <div class="sec-heading">
                        <div class="sub-inner mb-15">
                            <span class="sub-title">backers</span>
                            <img class="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
                        </div>
                        <h2 class="title mb-0 xs-pb-20">Our PARTNERS</h2>
                    </div>
                    <div class="gamfi-btn-area">
                        <ul class="GamfiV3_ProjectPoolsBtn">
                            <li class="v3_OurPartnars_tablinks m-0" onclick="openV3_OurPartnars(event, 'Investor')" id="V3_OurPartnars_Tab_defaultOpen">
                                <button class="view-more black-shape">
                                    <span class="btn-text">Investor</span>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </button>
                            </li>
                            <li class="v3_OurPartnars_tablinks" onclick="openV3_OurPartnars(event, 'MEDIA')">
                                <button class="view-more black-shape">
                                    <span class="btn-text">MEDIA</span>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="Our_PARTNERSContnetSect">
                    <div id="Investor" class="v3_OurPartnars_tabcontent animate_opacity">
                        <ul class="OurPartnatList">
                            <li><img src="/images/partner/1.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/2.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/3.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/4.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/5.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/6.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/7.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/8.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/9.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/10.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/11.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/12.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/13.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/14.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/15.png" alt="logo" class="img-fluid" /></li>
                        </ul>
                    </div>

                    <div id="MEDIA" class="v3_OurPartnars_tabcontent animate_opacity">
                        <ul class="OurPartnatList">
                            <li><img src="/images/partner/7.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/8.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/9.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/4.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image2.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image3.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image4.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/partner-image5.png" alt="logo" class="img-fluid" /></li>
                            <li><img src="/images/partner/15.png" alt="logo" class="img-fluid" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="OurPartnat_EathImg">
                <img src="/images/icons/earthBg.svg" alt="img" class="img-fluid" />
            </div>
            <div class="RocketImgBW">
                <img src="/images/icons/rocket.png" alt="img" class="img-fluid" />
            </div>
        </div>
    </>)
}