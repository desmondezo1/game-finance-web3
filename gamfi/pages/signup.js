

export default function signup(){
    return (<>
    		<div class="SignUp_SignIn_Form_Sect">
            <div class="SignUp_SignIn_Form_SectBG"></div>
		    <div class="container">
		        <div class="SignUp_SignIn_Form_Content">
		            <div class="SignUp_SignIn_Form">
		                <h2>Create Account</h2>
		                <h3>Inter your name, valid email address and password to register your account</h3>
		                <form action="#">
		                    <div class="FullNameFild">
		                        <lable>Full Name</lable>
		                        <input type="text" placeholder="Enter your name" />
		                    </div>
		                    <div class="EmailFild">
		                        <lable>Email Address</lable>
		                        <input type="email" placeholder="Enter your email address" />
		                    </div>
		                    <div class="PasswordFild">
		                        <lable>Password</lable>
		                        <input type="email" placeholder="Enter your password" />
		                    </div>
		                    <div class="KYC_TramsAndCondetionSect mt-0">
		                        <label class="container">I accept the <a href="#">Term of Conditions</a> and <a href="#">Privacy Policy</a>
		                            <input type="checkbox" />
		                            <span class="checkmark"></span>
		                        </label>
		                    </div>
		                    <a href="index-2.html">
		                        <div class="project-btn-area text-center black-shape-bigCustom">
		                            <button>Register Account</button>
		                            <span class="hover-shape1"></span>
		                            <span class="hover-shape2"></span>
		                            <span class="hover-shape3"></span>
		                        </div>
		                    </a>
		                </form>
		                <h4>Already have an account ? <a href="signin.html">Sign in now !</a></h4>
		            </div>
		            <div class="singUpformShadow"></div>
		        </div>
		    </div>
		</div>	
    
    </>)
}