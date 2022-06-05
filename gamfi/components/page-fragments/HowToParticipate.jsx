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
                                <h2 className={`${indexCss.fiFont} title` }>Join Orchestrstor Network</h2>
                            </div>
                            <div className="How_to_Participate_Left_Contnet">
                                <p>In Finance Token, any NGO and Charitable organisation can join the network and become what&apos;s known as an orchestrator by Signing Agreements to mandates you to offer free and immediate healthcare services to consumers in your Region. either subsidized or 100% free. contribute your PILLS to help Citizens like Bob. <br/> For doing so, you earn fees in the form of a cryptocurrency like BNB or a stablecoin pegged to the US dollar like BUSD.</p>
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
                                    <p>Go through basic Identity varification and business Licensing </p>
                                </div>
                            </div>
                            <div className="How_to_Participate_right_Card How_to_Participate_right_Card2 wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <div className="How_to_Participate_right_Card_number">
                                    <img src="/images/icons/two.svg" alt="img" className="img-fluid" />
                                </div>
                                <div className="How_to_Participate_right_CardText">
                                    <h4>Verify Contract</h4>
                                    <p>Simply connect your web3 wallet, buy $Fin and approve a smart contract.</p>
                                </div>
                            </div>
                            <div className="How_to_Participate_right_Card How_to_Participate_right_Card3 wow fadeInRight" data-wow-delay="0.4s" data-wow-duration="0.6s">
                                <div className="How_to_Participate_right_Card_number">
                                    <img src="/images/icons/three.svg" alt="img" className="img-fluid" />
                                </div>
                                <div className="How_to_Participate_right_CardText">
                                    <h4>Own Staking Pool</h4>
                                    <p>If Verified and contract created you now can govern a staking pool and take out profits from the staking pairs.</p>
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
