import indexCss from "../styles/index.module.css"

export default function signup(){
    return (<>

    		<div className={`${indexCss.top} SignUp_SignIn_Form_Sect`}>
            <div className="SignUp_SignIn_Form_SectBG"></div>
		    <div className="container">
		        <div className="SignUp_SignIn_Form_Content">
		            <div className="SignUp_SignIn_Form">
		                <h2>Create Account</h2>
		                <h3>Inter your name, valid email address and password to register your account</h3>
		                <form action="#">
		                    <div className="FullNameFild">
		                        <lable>Full Name</lable>
		                        <input type="text" placeholder="Enter your name" />
		                    </div>
		                    <div className="EmailFild">
		                        <lable>Email Address</lable>
		                        <input type="email" placeholder="Enter your email address" />
		                    </div>
		                    <div className="PasswordFild">
		                        <lable>Password</lable>
		                        <input type="email" placeholder="Enter your password" />
		                    </div>
		                    <div className="KYC_TramsAndCondetionSect mt-0">
		                        <label className="container">I accept the <a href="#">Term of Conditions</a> and <a href="#">Privacy Policy</a>
		                            <input type="checkbox" />
		                            <span className="checkmark"></span>
		                        </label>
		                    </div>
		                    <a href="index-2.html">
		                        <div className="project-btn-area text-center black-shape-bigCustom">
		                            <button>Register Account</button>
		                            <span className="hover-shape1"></span>
		                            <span className="hover-shape2"></span>
		                            <span className="hover-shape3"></span>
		                        </div>
		                    </a>
		                </form>
		                <h4>Already have an account ? <a href="signin.html">Sign in now !</a></h4>
		            </div>
		            <div className="singUpformShadow"></div>
		        </div>
		    </div>
		</div>	
    
    </>)
}