import React, {useState} from 'react'
import './steps.scss'
import {ReactComponent as Op1} from '../Assets/maestro.svg'
import {ReactComponent as Op2} from '../Assets/visa.svg'
import {ReactComponent as Op3} from '../Assets/upi.svg'
import {ReactComponent as Op4} from '../Assets/hand-exchange-money.svg'
import {Grid} from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
export default function Step2(props) {
    const handleChoose = (e) => {
        props.setIsChosen(e.target.id)
        const chosen = e.target.id
        if(chosen == "1" || chosen == "2" || chosen == "3" ){
            props.setNextDisabled(false)
        }
    }
    if (props.currentStep !== 2) {
        return null
    } 
      return(
        <div className="form-group2">
          <h1>Payment Method</h1>
        <div className="op1">
        <Grid container >
                <Grid item xs={2} >
                    <Op1  className="icon"/>
                </Grid>
                <Grid item xs={8} >
                    <div className="mid">
                    <h2>CREDIT CARD</h2>
                    </div>
                </Grid>
                <Grid item xs={2} id="1" onClick={handleChoose}>
                    <div className="tick" id="1" onClick={handleChoose}>
                        {
                            props.isChosen == 1 
                            ?
                            <CheckCircleOutlineIcon className="chosen" />
                            :
                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" id="1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                        }
                    </div>
                </Grid>
         </Grid>
        </div>

    <div className="op2" value="2" onClick={handleChoose}>
    <Grid container>
            
            <Grid item xs={2}>
                <Op2 className="icon" />
            </Grid>
            <Grid item xs={8}>
                <div className="mid">
                    <h2>DEBIT CARD</h2>
                </div>
            </Grid>
            <Grid item xs={2}>
            <div className="tick">
            {
                props.isChosen == 2 
                ?
                <CheckCircleOutlineIcon className="chosen" />
                :
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" id="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
            }            
            </div>
            </Grid>
        
     </Grid>
    </div>


          <div className="op3" value="3" onClick={handleChoose}>
          <Grid container>
            
            <Grid item xs={2}>
                <Op3  className="icon"/>
            </Grid>
            <Grid item xs={8}>
                <div className="mid">
                <h2>UPI</h2>
                </div>
            </Grid>
            <Grid item xs={2}>
            <div className="tick">
            {
                props.isChosen == 3 
                ?
                <CheckCircleOutlineIcon className="chosen" />
                :
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" id="3"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
            }
            </div>
            </Grid>
       
     </Grid>
          </div>


          <div className="op4">
          <Grid container>
             
             <Grid item xs={2}>
                <Op4  className="icon-cod"/>
             </Grid>
             <Grid item xs={8}>
                <div className="mid">
                <h2 className="cod">PAY ON DELIVERY</h2>
                </div>
             </Grid>
             <Grid item xs={2}> 
             <div className="tick">
             {
                props.isChosen == 10 
                ?
                <CheckCircleOutlineIcon className="chosen" />
                :
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" id="4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
            }
            </div>
            </Grid>
      </Grid>
          </div>
        </div>
      );
}
