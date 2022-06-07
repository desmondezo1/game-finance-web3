import indexCss from "../../styles/index.module.css"

export default function Participantdetails(){
    return(<>
            <div  className={`${indexCss.top} project-details-conent Fin-about-secion pb-80`}>
            <div className="container">
                <div className="row pt-100">
                    <div className="col-lg-4 col-md-6">
                        <div className="project-item project-value-inner">
                            <div className="project-value">
                                <h3 className="mb-15">$7,868,163.54</h3>
                                <span>Total Value Locked</span>
                            </div>
                            <div className="project-value-image">
                                <img src="/images/project/raking.png" alt="rank"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-item project-value-inner">
                            <div className="project-value">
                                <h3 className="mb-15">158.52%</h3>
                                <span>Apy</span>
                            </div>
                            <div className="project-value-image">
                                <img src="/images/project/raking2.png" alt="rank"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-item project-value-inner">
                            <div className="project-value">
                                <h3 className="mb-15">6412</h3>
                                <span>Number of Stakers</span>
                            </div>
                            <div className="project-value-image">
                                <img src="/images/project/raking3.png" alt="rank"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 md-mb-30">
                        <div className="project-summary-menu bg_gradient_custom">
                            <div className="nav" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-project-summary" data-bs-toggle="tab" data-bs-target="#project-summary" type="button" role="tab" aria-selected="true">Checkpoint <img src="/images/project/menu-image.png" alt="project" /></button>
                                <button className="nav-link" id="nav-schedule" data-bs-toggle="tab" data-bs-target="#schedule" type="button" role="tab" aria-selected="false">Amount Stake<img src="/images/project/menu-image.png" alt="project" /></button>
                                <button className="nav-link" id="nav-comparison" data-bs-toggle="tab" data-bs-target="#comparison" type="button" role="tab" aria-selected="false">Pre-authorization<img src="/images/project/menu-image.png" alt="project" /></button>
                                <button className="nav-link" id="nav-tokenomics" data-bs-toggle="tab" data-bs-target="#tokenomics" type="button" role="tab" aria-selected="false">Confirm<img src="/images/project/menu-image.png" alt="project" /></button>
                                <button className="nav-link" id="nav-roadmap" data-bs-toggle="tab" data-bs-target="#roadmap" type="button" role="tab" aria-selected="false">Confirmation <img src="/images/project/menu-image.png" alt="project" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 md-mb-30">
                        <div className="project-meta-inner">
                            <div className="meta-header">
                                <h4 className="mb-20">Connected MetaMask</h4>
                                <p>If not connected, click the &quot; Connect Wallet &quot; button in the top right corner</p>
                            </div>
                            <div className="meta-header">
                                <h4 className="mb-20">Available Balance</h4>
                                <p>Current Balance: 38.00 You must have balance in wallet</p>
                            </div>
                            <div className="meta-header">
                                <h4 className="mb-20">Eligible to stake</h4>
                                <p>You cannot stake if you have an active unstake/withdrawal request</p>
                            </div>
                        </div>
                        <div className="project-btn-area">
                            <a className="readon active black-shape-big" href="#">Next
                                <span className="hover-shape1"></span>
                                <span className="hover-shape2"></span>
                                <span className="hover-shape3"></span>   
                            </a>
                            <a className="readon next white-shape-big" href="#">Previous
                               <span className="hover-shape1"></span>
                               <span className="hover-shape2"></span>
                               <span className="hover-shape3"></span> 
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="project-meta-item p-0">
                            <div className="meta-counter">
                                <h3 className="mb-20">256.50</h3>
                                <span>Your Staked</span>
                            </div>
                            <div className="meta-counter">
                                <h3 className="mb-20">38.00 BUSD</h3> BUSD
                                <span>Your Rewards</span>
                                <div className="project-btn-area pt-45">
                                    <a className="readon active Stake black-shape-big" href="#">Stake
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                    </a>
                                    <a className="readon next draw white-shape-big" href="#">Withdraw
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>)
} 