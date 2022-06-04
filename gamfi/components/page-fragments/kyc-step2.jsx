import Link from 'next/link'
import indexCss from "../../styles/index.module.css"

export default function KycStep2(){
    return (
        <>

<div  className={`${indexCss.top} kycFormSect`}>
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-6 p-0">
                        <div className="kycForm">
                            <div className="UploadDocSect">
                                <h3>Upload Documents</h3>
                                <ul>
                                    <li>
                                        <div className="UploadBtnBg">
                                            <div className="upload-btn-wrapper">
                                                <span><img src="/images/kycimg/uploadFileicon.svg" alt="icon" className="img-fluid" /></span>
                                                <input type="file" name="myfile" />
                                            </div>
                                        </div>
                                        <h4>National ID Front</h4>
                                    </li>
                                    <li>
                                        <div className="UploadBtnBg">
                                            <div className="upload-btn-wrapper">
                                                <span><img src="/images/kycimg/uploadFileicon.svg" alt="icon" className="img-fluid" /></span>
                                                <input type="file" name="myfile" />
                                            </div>
                                        </div>
                                        <h4>National ID Back</h4>
                                    </li>
                                    <li>
                                        <div className="UploadBtnBg">
                                            <div className="upload-btn-wrapper">
                                                <span><img src="/images/kycimg/uploadFileicon.svg" alt="icon" className="img-fluid" /></span>
                                                <input type="file" name="myfile" />
                                            </div>
                                        </div>
                                        <h4>Selfie with National ID</h4>
                                    </li>
                                </ul>
                            </div>
                            <div className="UploadDocCheckList">
                                <ul>
                                    <li><span><img src="/images/kycimg/checkicon.svg" alt="icon" className="img-fluid" /></span>File accepted: JPEG/JPS/PNG (Max size: 250 KB</li>
                                    <li className="active"><span><img src="/images/kycimg/checkicon.svg" alt="icon" className="img-fluid" /></span>Document should be good condition</li>
                                    <li><span><img src="/images/kycimg/checkicon.svg" alt="icon" className="img-fluid" /></span>Document must be valid period</li>
                                    <li><span><img src="/images/kycimg/checkicon.svg" alt="icon" className="img-fluid" /></span>Face must be clear visible</li>
                                    <li className="mb-0"><span><img src="/images/kycimg/checkicon.svg" alt="icon" className="img-fluid" /></span>Not has today’s date</li>
                                </ul>
                            </div>
                            <div className="NidNumberSect">
                                <h3>National ID Number</h3>
                                <form action="#">
                                    <input type="text" placeholder="e.g.  58933699" />
                                </form>
                            </div>
                            <Link href={'step3'}>
                            <a >
                                <div className="project-btn-area text-center black-shape-bigCustom">
                                    <button>Next step</button>
                                    <span className="hover-shape1"></span>
                                    <span className="hover-shape2"></span>
                                    <span className="hover-shape3"></span>
                                </div>
                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="kycQrcodeSect">
                            <div className="kycQrcode_content">
                                <h2>Want to continue with SmArt Phone ?</h2>
                                <div className="kycQrcodeImg">
                                    <img src="/images/kycimg/QRcode.png" alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>)
    }