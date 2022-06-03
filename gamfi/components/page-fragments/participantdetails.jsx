export default function Participantdetails(){
    return(<>
            <div class="project-details-conent gamfi-about-secion pb-80">
            <div class="container">
                <div class="row pt-70">
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item project-value-inner">
                            <div class="project-value">
                                <h3 class="mb-15">$7,868,163.54</h3>
                                <span>Total Value Locked</span>
                            </div>
                            <div class="project-value-image">
                                <img src="assets/images/project/raking.png" alt="rank"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item project-value-inner">
                            <div class="project-value">
                                <h3 class="mb-15">158.52%</h3>
                                <span>Apy</span>
                            </div>
                            <div class="project-value-image">
                                <img src="assets/images/project/raking2.png" alt="rank"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="project-item project-value-inner">
                            <div class="project-value">
                                <h3 class="mb-15">6412</h3>
                                <span>Number of Stakers</span>
                            </div>
                            <div class="project-value-image">
                                <img src="assets/images/project/raking3.png" alt="rank"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 md-mb-30">
                        <div class="project-summary-menu bg_gradient_custom">
                            <div class="nav" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-project-summary" data-bs-toggle="tab" data-bs-target="#project-summary" type="button" role="tab" aria-selected="true">Checkpoint <img src="assets/images/project/menu-image.png" alt="project" /></button>
                                <button class="nav-link" id="nav-schedule" data-bs-toggle="tab" data-bs-target="#schedule" type="button" role="tab" aria-selected="false">Amount Stake<img src="assets/images/project/menu-image.png" alt="project" /></button>
                                <button class="nav-link" id="nav-comparison" data-bs-toggle="tab" data-bs-target="#comparison" type="button" role="tab" aria-selected="false">Pre-authorization<img src="assets/images/project/menu-image.png" alt="project" /></button>
                                <button class="nav-link" id="nav-tokenomics" data-bs-toggle="tab" data-bs-target="#tokenomics" type="button" role="tab" aria-selected="false">Confirm<img src="assets/images/project/menu-image.png" alt="project" /></button>
                                <button class="nav-link" id="nav-roadmap" data-bs-toggle="tab" data-bs-target="#roadmap" type="button" role="tab" aria-selected="false">Confirmation <img src="assets/images/project/menu-image.png" alt="project" /></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 md-mb-30">
                        <div class="project-meta-inner">
                            <div class="meta-header">
                                <h4 class="mb-20">Connected MetaMask</h4>
                                <p>If not connected, click the "Connect Wallet" button in the top right corner</p>
                            </div>
                            <div class="meta-header">
                                <h4 class="mb-20">Available Balance</h4>
                                <p>Current Balance: 38.00 You must have balance in wallet</p>
                            </div>
                            <div class="meta-header">
                                <h4 class="mb-20">Eligible to stake</h4>
                                <p>You cannot stake if you have an active unstake/withdrawal request</p>
                            </div>
                        </div>
                        <div class="project-btn-area">
                            <a class="readon active black-shape-big" href="#">Next
                                <span class="hover-shape1"></span>
                                <span class="hover-shape2"></span>
                                <span class="hover-shape3"></span>   
                            </a>
                            <a class="readon next white-shape-big" href="#">Previous
                               <span class="hover-shape1"></span>
                               <span class="hover-shape2"></span>
                               <span class="hover-shape3"></span> 
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="project-meta-item p-0">
                            <div class="meta-counter">
                                <h3 class="mb-20">256.50</h3>
                                <span>Your Staked</span>
                            </div>
                            <div class="meta-counter">
                                <h3 class="mb-20">38.00 BUSD</h3> BUSD
                                <span>Your Rewards</span>
                                <div class="project-btn-area pt-45">
                                    <a class="readon active Stake black-shape-big" href="#">Stake
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                    </a>
                                    <a class="readon next draw white-shape-big" href="#">Withdraw
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span> 
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