import indexCss from "../../styles/index.module.css"
import projectsData from "../../utility/projectsData"

export default function PreviousSection(){
    return (<>
            <div  className={`${indexCss.top} Fin-previous-section ProjectPools_V3 pb-90 md-pb-50`}>
            <div className="container">
                <div className="sec-inner align-items-center d-flex justify-content-between  mb-50">
                    <div className="sec-heading">
                        <div className="sub-inner mb-15">
                            <span className="sub-title">EXPLORE</span>
                            <img className="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
                        </div>
                        <h2 className="title mb-0 xs-pb-20">Project POOLS</h2>
                    </div>
                    <div className="Fin-btn-area">
                        <ul className="FinV3_ProjectPoolsBtn">
                            <li className="V3_ProjectPool_tablinks m-0" onClick="openV3_ProjectPool(event, 'On_going')" id="V3_ProjectPool_Tab_defaultOpen">
                                <button className="view-more black-shape">
                                    <span className="btn-text">On going</span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                            <li className="V3_ProjectPool_tablinks" onClick="openV3_ProjectPool(event, 'UPCOMING')">
                                <button className="view-more black-shape">
                                    <span className="btn-text">UPCOMING</span>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </button>
                            </li>
                            <li className="V3_ProjectPool_tablinks" onClick="openV3_ProjectPool(event, 'ENDED')">
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
          
                            </div>
                            { projectsData.map(({project_name, price, symbol, chain, created, raised, percent_raised}, index) =>{

                               return ( 
                               <div  key={index} className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                <a href="project-details.html">
                                    <div className="previous-item hover-shape-border hover-shape-inner">
                                        <div className="previous-gaming">
                                            <div className="previous-image">
                                                <img src="/images/project/privius-image.png" alt="Previous-Image" />
                                            </div>
                                            <div className="previous-price">
                                                <h4 className="mb-10">{project_name}</h4>
                                                <div className="dsc">PRICE ({symbol}) = {price?.toLocaleString()} BUSD</div>
                                            </div>
                                        </div>
                                        <div className="previous-chaining">
                                            <img src={`/images/project/${chain}.png`} alt="Chain-Image" />
                                            <span>{created}</span>
                                        </div>
                                        <div className="previous-raise">
                                            <span>{raised} BUSD ({Math.trunc((10 * percent_raised))/10}%)</span>
                                            <div className="progress-inner">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={Math.trunc(percent_raised)} aria-valuemin="0" aria-valuemax="100" style={{width: Math.trunc(percent_raised)+"%"}}></div>
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
                            </div>)
                            }) }
                           

                        </div>

                    </div>
                </div>
            </div>
        </div>
    
    
    </>)
}