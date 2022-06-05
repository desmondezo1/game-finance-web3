import indexCss from "../../styles/index.module.css"

export default function KeyPointsSection(){
    return (<>
        <div  className={`${indexCss.top} Key_Points_section Key_PointsV2_section main-project-area`}>
            <div className="container">
                <div className="sec-inner align-items-center mb-30">
                    <div className="sec-heading">
                        <div className="sub-inner mb-15">
                            <span className="sub-title">FEATURES</span>
                            <img className="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
                        </div>
                        <h2 className="title">Key Points</h2>
                    </div>
                    <div className="Key_Points_Conttent">
                        <div className="row">
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                <div className="Key_Points_Items">
                                    <div className="Key_Points_Item_img">
                                        <img src="/images/icons/Key_icon1.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <div className="Key_Points_Item_Text">
                                        <h3>Defi</h3>
                                        <p>Defi means it&apos;s Decentralized, secured and always scalable, giving full control over your money.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <div className="Key_Points_Items">
                                    <div className="Key_Points_Item_img">
                                        <img src="/images/icons/Key_icon2.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <div className="Key_Points_Item_Text">
                                        <h3>PoS Conscensus</h3>
                                        <p>Proof of Stake mechanism, This has the effect of growing network ownership amongst those who participate and shrinking it amongst those who do not.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
                                <div className="Key_Points_Items">
                                    <div className="Key_Points_Item_img">
                                        <img src="/images/icons/Key_icon3.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <div className="Key_Points_Item_Text">
                                        <h3>Fair Launch</h3>
                                        <p>No whales or pre sale Investors every single Delegator is given a fair right of ownership at a same price on Launch.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                                <div className="Key_Points_Items">
                                    <div className="Key_Points_Item_img">
                                        <img src="/images/icons/Key_icon4.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <div className="Key_Points_Item_Text">
                                        <h3>Community Owned</h3>
                                        <p>The Progression of the $FIN token project is dependent on collective participation in trading, HODL and Affiliating by the community. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    </>)
}
