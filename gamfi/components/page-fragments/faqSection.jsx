import indexCss from "../../styles/index.module.css"

export default function FaqSection(){
    return (<>
    
    <div  className={`${indexCss.top} Fin-team-section Fin_FAQ_Sect Fin_Our_mentor_section pt-115 pb-85 md-pt-75 md-pb-42`}>
            <div className="container">
                <div className="sec-heading text-center mb-55">
                    <div className="sub-inner  mb-15">
                        <img className="heading-left-image" src="/images/icons/steps2.png" alt="Steps-Image" />
                        <span className="ml-10 mr-10 sub-title">QUESTIONS & ANSWERS</span>
                        <img className="heading-right-image" src="/images/icons/steps.png" alt="Steps-Image" />
                    </div>
                    <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
                </div>
                <div className="FAQContnetSect">
                    <div className="FAQquestions">
                        <h2 className="accordion no-border">
                            What is Fin ?
                            <span>
                                <img src="/images/icons/plus.svg" alt="" className="img-fluid IconPlus" />
                                <img src="/images/icons/munis.svg" alt="" className="Img-fluid IconMunise" />
                            </span>
                        </h2>
                        <div className="accordion-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <h2 className="accordion">
                            How we can buy and invest token ?
                            <span>
                                <img src="/images/icons/plus.svg" alt="" className="img-fluid IconPlus" />
                                <img src="/images/icons/munis.svg" alt="" className="Img-fluid IconMunise" />
                            </span></h2>
                        <div className="accordion-panel">
                            <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.</p>
                        </div>

                        <h2 className="accordion">
                            Why we should choose Fin ?
                            <span>
                                <img src="/images/icons/plus.svg" alt="" className="img-fluid IconPlus" />
                                <img src="/images/icons/munis.svg" alt="" className="Img-fluid IconMunise" />
                            </span>
                        </h2>
                        <div className="accordion-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <h2 className="accordion">
                            Where we can buy and sell Fin NFts ?
                            <span>
                                <img src="/images/icons/plus.svg" alt="" className="img-fluid IconPlus" />
                                <img src="/images/icons/munis.svg" alt="" className="Img-fluid IconMunise" />
                            </span> 
                        </h2>
                        <div className="accordion-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <h2 className="accordion">
                            How secure is this token ?
                            <span>
                                <img src="/images/icons/plus.svg" alt="" className="img-fluid IconPlus" />
                                <img src="/images/icons/munis.svg" alt="" className="Img-fluid IconMunise" />
                            </span> 
                        </h2>
                        <div className="accordion-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        
                        <h2 className="accordion">
                            What is your contract address ?
                            <span>
                                <img src="/images/icons/plus.svg" alt="" className="img-fluid IconPlus" />
                                <img src="/images/icons/munis.svg" alt="" className="Img-fluid IconMunise" />
                            </span> 
                        </h2>
                        <div className="accordion-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <h6>Don’t get your answer ? <a href="Get-In-touch.html">Ask Here !</a></h6>
                    <div className="FAQGalaxyImg">
                        <img src="/images/icons/galaxy_image.png" alt="img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    
    </>)
}