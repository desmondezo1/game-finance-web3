import indexCss from "../../styles/index.module.css"

export default function PreviousSection(){
    return (<>
            <div  className={`${indexCss.top} gamfi-previous-section ProjectPools_V3 pb-90 md-pb-50`}>
            <div className="container">
                <div className="sec-inner align-items-center d-flex justify-content-between  mb-50">
                    <div className="sec-heading">
                        <div className="sub-inner mb-15">
                            <span className="sub-title">EXPLORE</span>
                            <img className="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
                        </div>
                        <h2 className="title mb-0 xs-pb-20">Project POOLS</h2>
                    </div>
                    <div className="gamfi-btn-area">
                        <ul className="GamfiV3_ProjectPoolsBtn">
                            <li className="V3_ProjectPool_tablinks m-0" onclick="openV3_ProjectPool(event, 'On_going')" id="V3_ProjectPool_Tab_defaultOpen">
                                <button className="view-more black-shape">
                                    <span className="btn-text">On going</span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                            <li className="V3_ProjectPool_tablinks" onclick="openV3_ProjectPool(event, 'UPCOMING')">
                                <button className="view-more black-shape">
                                    <span className="btn-text">UPCOMING</span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                            <li className="V3_ProjectPool_tablinks" onclick="openV3_ProjectPool(event, 'ENDED')">
                                <button className="view-more black-shape">
                                    <span className="btn-text">View More</span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="V3_ProjectPools_TabContentSect">
                        <div id="On_going" className="v3_ProjectPools_tabcontent animate_opacity">
                            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                <div className="previous-mainmenu mb-15">
                                    <ul className="menu-list">
                                        <li className="list1">Project name</li>
                                        <li className="list2">Chain</li>
                                        <li className="list3">Launched</li>
                                        <li className="list4">Total Raise</li>
                                        <li className="list5">Progress</li>
                                    </ul>
                                </div>
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image2.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">KyberDyne</h4>
                                                <div className="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image.png" alt="Chain-Image" />
                                            <span>5 Hours ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Thetan Arena</h4>
                                                <div className="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image2.png" alt="Chain-Image" />
                                            <span>1 days ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>265,000 BUSD (73%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image3.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Galaxy War</h4>
                                                <div className="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image3.png" alt="Chain-Image" />
                                            <span>3 Day Ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>510,000 BUSD (98%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image10.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">KingdomX</h4>
                                                <div className="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image4.png" alt="Chain-Image" />
                                            <span>5 Days Ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image5.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Cyber City</h4>
                                                <div className="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image5.png" alt="Chain-Image" />
                                            <span>5 Day Agos</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>500,000 BUSD (86%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="UPCOMING" className="v3_ProjectPools_tabcontent animate_opacity">
                            <div className="col-md-12">
                                <div className="previous-mainmenu mb-15">
                                    <ul className="menu-list">
                                        <li className="list1">Project name</li>
                                        <li className="list2">Chain</li>
                                        <li className="list3">Launched</li>
                                        <li className="list4">Total Raise</li>
                                        <li className="list5">Progress</li>
                                    </ul>
                                </div>
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">KyberDyne</h4>
                                                <div className="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image.png" alt="Chain-Image" />
                                            <span>5 Hours ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image3.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Galaxy War</h4>
                                                <div className="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image3.png" alt="Chain-Image" />
                                            <span>3 Day Ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>510,000 BUSD (98%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image4.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">KingdomX</h4>
                                                <div className="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image4.png" alt="Chain-Image" />
                                            <span>5 Days Ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image5.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Cyber City</h4>
                                                <div className="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image5.png" alt="Chain-Image" />
                                            <span>5 Day Agos</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>500,000 BUSD (86%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image2.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Thetan Arena</h4>
                                                <div className="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image2.png" alt="Chain-Image" />
                                            <span>1 days ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>265,000 BUSD (73%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="ENDED" className="v3_ProjectPools_tabcontent animate_opacity">
                            <div className="col-md-12">
                                <div className="previous-mainmenu mb-15">
                                    <ul className="menu-list">
                                        <li className="list1">Project name</li>
                                        <li className="list2">Chain</li>
                                        <li className="list3">Launched</li>
                                        <li className="list4">Total Raise</li>
                                        <li className="list5">Progress</li>
                                    </ul>
                                </div>
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">KyberDyne</h4>
                                                <div className="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image.png" alt="Chain-Image" />
                                            <span>5 Hours ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image4.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">KingdomX</h4>
                                                <div className="dsc">PRICE (CTC) = 0.45 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image4.png" alt="Chain-Image" />
                                            <span>5 Days Ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>100,000 BUSD (100%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image10.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Cyber City</h4>
                                                <div className="dsc">PRICE (GAC) = 0.59 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image5.png" alt="Chain-Image" />
                                            <span>5 Day Agos</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>500,000 BUSD (86%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image3.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Galaxy War</h4>
                                                <div className="dsc">PRICE (MTS) = 0.33 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image3.png" alt="Chain-Image" />
                                            <span>3 Day Ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>510,000 BUSD (98%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image2.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">Thetan Arena</h4>
                                                <div className="dsc">PRICE (FSC) = 0.89 BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src="/images/project/previous-image2.png" alt="Chain-Image" />
                                            <span>1 days ago</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>265,000 BUSD (73%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-shadow shadow-1"></span>
                                        <span className="border-shadow shadow-2"></span>
                                        <span className="border-shadow shadow-3"></span>
                                        <span className="border-shadow shadow-4"></span>
                                        <span className="hover-shape-bg hover_shape1"></span>
                                        <span className="hover-shape-bg hover_shape2"></span>
                                        <span className="hover-shape-bg hover_shape3"></span>
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