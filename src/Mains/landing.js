import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import Step1 from '../Components/step1'
import Step2 from '../Components/step2'
import Step3 from '../Components/step3'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './landing.scss'
import Tooltip from '@material-ui/core/Tooltip';
import Success from '../Components/Success'
const Landing = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [nextDisabled, setNextDisabled] = useState(true)
    const [isChosen, setIsChosen] = useState("")
    const [success, setSuccess] = useState(false)
   const  _next = () => {
        let CurrentStep =currentStep
        if(nextDisabled === false){
          CurrentStep = currentStep >= 2? 3: currentStep + 1
        }
        setCurrentStep(CurrentStep)
        setNextDisabled(true)
      }
        
     const _prev = () => {
        let CurrentStep = currentStep
        CurrentStep = currentStep <= 1? 1: currentStep - 1
        setCurrentStep(CurrentStep)
      }

     const previousButton = () => {
        let CurrentStep = currentStep;
        if(CurrentStep !==1){
          return (
            <KeyboardArrowLeftIcon onClick={_prev} className="btn-secondary" />
          )
        }
        return null;
      }
      
     const nextButton = () => {
        let CurrentStep = currentStep;
        if(CurrentStep === 1){
          if(nextDisabled === true){
            return (
              <Tooltip title="Make Sure you enter valid details">
                              <KeyboardArrowRightIcon onClick={_next} className="btn-primary-disabled" />       
              </Tooltip>
            )
          }
          else{
            return (
              <Tooltip  title="Choose Payment Method">
                    <KeyboardArrowRightIcon onClick={_next} className="btn-primary" />       
              </Tooltip>
            )
          }
        }
        if(CurrentStep === 2){
          if(nextDisabled === true){
            return (
              <Tooltip title="Please choose a payment method">
                   <KeyboardArrowRightIcon onClick={_next} className="btn-primary-disabled" />       
              </Tooltip>
            )
          }
          else{
            return (
              <Tooltip  title="Make Payment">
                <KeyboardArrowRightIcon onClick={_next} className="btn-primary" />       
              </Tooltip>            
            )
          }
        }
        return null;
      }
    return (
        <div className="landing">
            {
              success 
              ?
              <Success />
              : 
              <div className="card">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div className="left">
                            <h3>CHECKOUT &#8594;</h3>
                            <h2>Your order</h2>
                            <h1 className="product">CYPHEROCK <span> X1</span></h1>
                            <p>
                                Next Gen Crypto Hardware Wallet and Backup Solution
                            </p>

                            <h1 className="billing">Billing Amount <span>99$</span></h1>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="right">
                        <h3>{currentStep}o3</h3>
                        <form className="form">
                            <Step1 
                                currentStep={currentStep} setNextDisabled={setNextDisabled}
                            />
                            <Step2 
                                currentStep={currentStep} setNextDisabled={setNextDisabled} isChosen={isChosen} setIsChosen={setIsChosen}
                            />
                            <Step3 
                                currentStep={currentStep} isChosen={isChosen} setSuccess={setSuccess}
                            />       
                                
                            </form>
                            {previousButton()}
                                {nextButton()}
                        </div>
                    </Grid>
                </Grid>
            </div>
            }
        </div>
    )
}


  export default  Landing