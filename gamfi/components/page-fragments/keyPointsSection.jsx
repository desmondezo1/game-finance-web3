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
                                        <h3>Decentralized</h3>
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn &apos; t anything embarrassing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <div className="Key_Points_Items">
                                    <div className="Key_Points_Item_img">
                                        <img src="/images/icons/Key_icon2.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <div className="Key_Points_Item_Text">
                                        <h3>Secure Bridge</h3>
                                        <p>But I must explain to you how all this mistaken idea of  new gem denouncing pleasure and praising pain</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
                                <div className="Key_Points_Items">
                                    <div className="Key_Points_Item_img">
                                        <img src="/images/icons/Key_icon3.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <div className="Key_Points_Item_Text">
                                        <h3>Fair Allocations</h3>
                                        <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">
                                <div className="Key_Points_Items">
                                    <div className="Key_Points_Item_img">
                                        <img src="/images/icons/Key_icon4.png" alt="icon" className="img-fluid" />
                                    </div>
                                    <div className="Key_Points_Item_Text">
                                        <h3>Autopilot Liquidity</h3>
                                        <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently </p>
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