export default function PreviousSection(){
    return (<>
            <div class="gamfi-previous-section ProjectPools_V3 pb-90 md-pb-50">
            <div class="container">
                <div class="sec-inner align-items-center d-flex justify-content-between  mb-50">
                    <div class="sec-heading">
                        <div class="sub-inner mb-15">
                            <span class="sub-title">EXPLORE</span>
                            <img class="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
                        </div>
                        <h2 class="title mb-0 xs-pb-20">Project POOLS</h2>
                    </div>
                    <div class="gamfi-btn-area">
                        <ul class="GamfiV3_ProjectPoolsBtn">
                            <li class="V3_ProjectPool_tablinks m-0" onclick="openV3_ProjectPool(event, 'On_going')" id="V3_ProjectPool_Tab_defaultOpen">
                                <button class="view-more black-shape">
                                    <span class="btn-text">On going</span>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </button>
                            </li>
                            <li class="V3_ProjectPool_tablinks" onclick="openV3_ProjectPool(event, 'UPCOMING')">
                                <button class="view-more black-shape">
                                    <span class="btn-text">UPCOMING</span>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </button>
                            </li>
                            <li class="V3_ProjectPool_tablinks" onclick="openV3_ProjectPool(event, 'ENDED')">
                                <button class="view-more black-shape">
                                    <span class="btn-text">View More</span>
                                    <span class="hover-shape1"></span>
                                    <span class="hover-shape2"></span>
                                    <span class="hover-shape3"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="V3_ProjectPools_TabContentSect">
                        <div id="On_going" class="v3_ProjectPools_tabcontent animate_opacity">
                            <div class="col-md-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                <div class="previous-mainmenu mb-15">
                                    <ul class="menu-list">
                                        <li class="list1">Project name</li>
                                        <li class="list2">Chain</li>
                                        <li class="list3">Launched</li>
                                        <li class="list4">Total Raise</li>
                                        <li class="list5">Progress</li>
                                    </ul>
                                </div>
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image2.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">KyberDyne</h4>
                                                <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image.png" alt="Chain-Image" />
                                            <span>5 Hours ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Thetan Arena</h4>
                                                <div class="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image2.png" alt="Chain-Image" />
                                            <span>1 days ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>265,000 BUSD (73%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image3.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Galaxy War</h4>
                                                <div class="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image3.png" alt="Chain-Image" />
                                            <span>3 Day Ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>510,000 BUSD (98%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image10.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">KingdomX</h4>
                                                <div class="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image4.png" alt="Chain-Image" />
                                            <span>5 Days Ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image5.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Cyber City</h4>
                                                <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image5.png" alt="Chain-Image" />
                                            <span>5 Day Agos</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>500,000 BUSD (86%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="UPCOMING" class="v3_ProjectPools_tabcontent animate_opacity">
                            <div class="col-md-12">
                                <div class="previous-mainmenu mb-15">
                                    <ul class="menu-list">
                                        <li class="list1">Project name</li>
                                        <li class="list2">Chain</li>
                                        <li class="list3">Launched</li>
                                        <li class="list4">Total Raise</li>
                                        <li class="list5">Progress</li>
                                    </ul>
                                </div>
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">KyberDyne</h4>
                                                <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image.png" alt="Chain-Image" />
                                            <span>5 Hours ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image3.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Galaxy War</h4>
                                                <div class="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image3.png" alt="Chain-Image" />
                                            <span>3 Day Ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>510,000 BUSD (98%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image4.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">KingdomX</h4>
                                                <div class="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image4.png" alt="Chain-Image" />
                                            <span>5 Days Ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image5.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Cyber City</h4>
                                                <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image5.png" alt="Chain-Image" />
                                            <span>5 Day Agos</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>500,000 BUSD (86%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image2.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Thetan Arena</h4>
                                                <div class="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image2.png" alt="Chain-Image" />
                                            <span>1 days ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>265,000 BUSD (73%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="ENDED" class="v3_ProjectPools_tabcontent animate_opacity">
                            <div class="col-md-12">
                                <div class="previous-mainmenu mb-15">
                                    <ul class="menu-list">
                                        <li class="list1">Project name</li>
                                        <li class="list2">Chain</li>
                                        <li class="list3">Launched</li>
                                        <li class="list4">Total Raise</li>
                                        <li class="list5">Progress</li>
                                    </ul>
                                </div>
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">KyberDyne</h4>
                                                <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image.png" alt="Chain-Image" />
                                            <span>5 Hours ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image4.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">KingdomX</h4>
                                                <div class="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image4.png" alt="Chain-Image" />
                                            <span>5 Days Ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image10.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Cyber City</h4>
                                                <div class="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image5.png" alt="Chain-Image" />
                                            <span>5 Day Agos</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>500,000 BUSD (86%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image3.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Galaxy War</h4>
                                                <div class="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image3.png" alt="Chain-Image" />
                                            <span>3 Day Ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>510,000 BUSD (98%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-12">
                                <a href="project-details.html">
                                    <div class="previous-item hover-shape-border hover-shape-inner">
                                        <div class="previous-gaming">
                                            <div class="previous-image">
                                                <img src="/images/project/privius-image2.png" alt="Previous-Image" />
                                            </div>
                                            <div class="previous-price">
                                                <h4 class="mb-10">Thetan Arena</h4>
                                                <div class="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                            </div>
                                        </div>
                                        <div class="previous-chaining">
                                            <img src="/images/project/previous-image2.png" alt="Chain-Image" />
                                            <span>1 days ago</span>
                                        </div>
                                        <div class="previous-raise">
                                            <span>265,000 BUSD (73%)</span>
                                            <div class="progress-inner">
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                        <span class="hover-shape-bg hover_shape1"></span>
                                        <span class="hover-shape-bg hover_shape2"></span>
                                        <span class="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    </>)
}