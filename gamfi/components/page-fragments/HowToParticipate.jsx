import indexCss from "../../styles/index.module.css"
import Link from "next/link"

export default function HowToParticipate(){
    return(<>
         <div className={`${indexCss.top} How_to_Participate_Sect`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="0.4s">
                        <div className="How_to_Participate_Left">
                            <div className="sec-heading">
                                <div className="sub-inner mb-15">
                                    <span className={`${indexCss.fiFont} sub-title`}>3 EASY STEPS</span>
                                    <img className="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
                                </div>
                                <h2 className={`${indexCss.fiFont} title` }>How to Participate</h2>
                            </div>
                            <div className="How_to_Participate_Left_Contnet">
                                <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment. so blinded by desire, that they cannot foresee the pain and trouble</p>
                                <div className="How_to_Participate_Left_Btn">
                                    <Link href={"/verify-kyc"}>
                                    <a className="view-more black-shape">
                                        <span className="btn-text">Verify KYC</span>
                                        <i className="icon-arrow_right"></i>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="How_to_Participate_right_Contnet">
                            <div className="How_to_Participate_right_Card How_to_Participate_right_Card1 wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                <div className="How_to_Participate_right_Card_number">
                                    <img src="/images/icons/One.svg" alt="img" className="img-fluid" />
                                </div>
                                <div className="How_to_Participate_right_CardText">
                                    <h4>Submit KYC</h4>
                                    <p>Contrary to popular belief, that are bound to ensue; and equal blame belongs to those who fail in their dutyis.</p>
                                </div>
                            </div>
                            <div className="How_to_Participate_right_Card How_to_Participate_right_Card2 wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <div className="How_to_Participate_right_Card_number">
                                    <img src="/images/icons/two.svg" alt="img" className="img-fluid" />
                                </div>
                                <div className="How_to_Participate_right_CardText">
                                    <h4>Verify Wallet</h4>
                                    <p>Simply random text. It has roots in a piece Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            </div>
                            <div className="How_to_Participate_right_Card How_to_Participate_right_Card3 wow fadeInRight" data-wow-delay="0.4s" data-wow-duration="0.6s">
                                <div className="How_to_Participate_right_Card_number">
                                    <img src="/images/icons/three.svg" alt="img" className="img-fluid" />
                                </div>
                                <div className="How_to_Participate_right_CardText">
                                    <h4>Start Staking</h4>
                                    <p>It has roots in a piece Contrary to popular belief, Lorem Ipsum is not simply random text roots in a piece</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lockerImg">
                    <img src="/images/icons/locker-dynamic-color.png" alt="img" className="img-fluid" />
                </div>
            </div>
            <div className="moon_imgBg">
                <img src="/images/icons/earthBg.svg" alt="img" className="img-fluid" />
            </div>
        </div>
    </>)
} 