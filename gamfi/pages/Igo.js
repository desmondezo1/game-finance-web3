import indexCss from "../styles/index.module.css"

export default function Igo(){
    return (<>
    

            {/* <!-- Breadcrumbs Section Start --> */}
        <div className={`${indexCss.top} gamfi-breadcrumbs-section`}>
            <div className="container">
                <div className="apply-heading text-center">
                    <h2 className="mb-0">Apply for IGO</h2>
                </div>
            </div>
        </div>
        {/* <!-- Breadcrumbs  Section End --> */}

        {/* <!-- Form Section Start --> */}
        <div className={`${indexCss.top} gamfi-form-content pt-65 md-pt-45 pb-120 md-pb-80`}>
            <div className="container">
                <div className="address-form">
                    <form>
                        <div className="input-button">
                            <input type="text" id="project" placeholder="Project Name" required />
                            <label for="project">Project Name</label>
                        </div>
                        <div className="input-button">
                            <input type="email" id="email" placeholder="Email Address" required />
                            <label for="email">Email address</label>
                        </div>
                        <div className="input-button">
                            <input type="text" id="brief" className="brief" placeholder="Project Brief" required />
                            <label for="brief">Project Brief</label>
                        </div>
                        <div className="radio-button">
                            <h5 className="mt-35">Blockchain/Platform</h5>
                            <div className="input-list">
                                <input type="radio" id="binance" name="fav_language" value="Binance Smart Chain" />
                                <label for="binance">Binance Smart Chain</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="solana" name="fav_language" value="Solana" />
                                <label for="solana">Solana</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="ethereum" name="fav_language" value="Ethereum" />
                                <label for="ethereum">Ethereum</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="polkadot" name="fav_language" value="Polkadot" />
                                <label for="polkadot">Polkadot</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="polygon" name="fav_language" value="Polygon (Matic)" />
                                <label for="polygon">Polygon (Matic)</label>
                                <div className="check"></div>
                            </div>
                            <h5 className="mt-25">Project status</h5>
                            <div className="input-list">
                                <input type="radio" id="idea" name="fav_language" value="Just an initial idea" />
                                <label for="idea">Just an initial idea</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="paper" name="fav_language" value="Idea with White Paper" />
                                <label for="paper">Idea with White Paper</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="development" name="fav_language" value="In early development" />
                                <label for="development">In early development</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="launch" name="fav_language" value="Ready to launch" />
                                <label for="launch">Ready to launch</label>
                                <div className="check"></div>
                            </div>
                            <h5 className="mt-30 mb-22">Have you already raised funds ?</h5>
                            <div className="input-list">
                                <input type="radio" id="yes" name="fav_language" value="Yes" />
                                <label for="yes">Yes</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="no" name="fav_language" value="No" />
                                <label for="no">No</label>
                                <div className="check"></div>
                            </div>
                            <h5 className="mt-34 mb-22">Is your team Anon or public</h5>
                            <div className="input-list">
                                <input type="radio" id="anon" name="fav_language" value="Anon" />
                                <label for="anon">Anon</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list"> 
                                <input type="radio" id="public" name="fav_language" value="Fully Public" />
                                <label for="public">Fully Public</label>
                                <div className="check"></div>
                            </div>
                            <div className="input-list">
                                <input type="radio" id="mixed" name="fav_language" value="Mixed" />
                                <label for="mixed">mixed</label>
                                <div className="check"></div>
                            </div>
                        </div>
                        <div className="input-button">
                            <input type="text" id="target" placeholder="How much are you planning on raising on the IGO?" required />
                            <label for="target">Target Raise</label>
                        </div>  
                        <div className="input-button">
                            <input type="text" id="website" placeholder="Enter link" required />
                            <label for="website">Project Website / Link to whitepaper</label>
                        </div>  
                        <div className="input-button group">
                            <i className="icon-telegram"></i>
                            <input type="text" className="enter" id="telegram" name="telegram"  placeholder="Enter telegram group link" required />
                            <label for="telegram">Telegram group</label>
                        </div> 
                        <div className="input-button">
                            <i className="icon-twitter"></i>
                            <input type="text" className="enter" id="twitter" name="twitter" placeholder="Enter telegram group link" required />
                            <label for="twitter">Project Twitter</label>
                        </div>  
                        <div  style={{ background: "#86cae6"}} className="project-btn-area text-center black-shape-big mt-40">
                            <input type="submit"  style={{ background: "#86cae6"}} name="submit" value="Submit IGO Project" />
                            <span className="hover-shape1"></span>
                            <span className="hover-shape2"></span>
                            <span className="hover-shape3"></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- Form Section End --> */}
    
    </>)
}