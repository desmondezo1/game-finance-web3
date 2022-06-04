export default function BreadCrumbsKYC({step}){
    return(<>
    
    <div className="gamfi-breadcrumbs-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="breadcrumbs-area sec-heading">
							<div className="sub-inner mb-15">
								<a className="breadcrumbs-link" href="index-2.html">Home</a>
								<span className="sub-title">KYC FORM</span>
								<img className="heading-left-image" src="/images/icons/steps.png" alt="Steps-Image" />
							</div>
							<h2 className="title mb-0">Submit KYC</h2>
						</div>
					</div>
					<div className="col-lg-7 breadcrumbs-form breadcrumbsprogress_BarCustom md-mt-40">
						<div className="Gamfi_Header_contentright">
                            <h2>Step {!step ? "1": step} of 3</h2>
                            <div className="Gamfi_Header_ProgressBar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
    
    </>)
}