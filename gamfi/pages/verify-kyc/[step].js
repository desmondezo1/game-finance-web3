import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import BreadCrumbsKYC from "../../components/page-fragments/breadcrumbskyc"
import KycStep1 from "../../components/page-fragments/kyc-Step1";
import KycStep2 from "../../components/page-fragments/kyc-Step2";
import KycStep3 from "../../components/page-fragments/kyc-Step3";

export default function VerifyKyc(){
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    

    useEffect(()=>{
        const { step } = router.query;
        if( step == "step1" || step == "Step1" || step == "STEP1"){
            setCurrentStep(1);
        }else if( step == "step2" || step == "Step2" || step == "STEP2" ){
            setCurrentStep(2);
        }else if(step == "step3" || step == "Step3" || step == "STEP3"){
            setCurrentStep(3);
        }else{
            setCurrentStep(1); 
        }
    })
    
    return (<>
    <BreadCrumbsKYC step={currentStep} />

    {
        currentStep == 1 ? (<KycStep1 />) : ("")
    }
    {
        currentStep == 2 ? (<KycStep2 />) : ("")
    }
    {
        currentStep == 3 ? (<KycStep3 />) : ("")
    }
    
    </>)
}