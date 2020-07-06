import React, {useState, useEffect} from 'react'
import './steps.scss'
import TextField from '@material-ui/core/TextField';

import {ReactComponent as Op1} from '../Assets/maestro.svg'
import {ReactComponent as Op2} from '../Assets/visa.svg'
import {ReactComponent as Op3} from '../Assets/upi.svg'
const Step3 = (props) => {
  const [upiDisable, setUpiDisable] = useState(true)
  const [upi, setUpi] = useState("")

  const [debitDisable, setDebitDisable] = useState(true)
  const [dNum, setDNum] = useState("")
  const [dName, setDName] = useState("")
  const [dExp, setDExp] = useState("")
  const [dCVV, setDCVV] = useState("")

  const [creditDisable, setCreditDisable] = useState(true)
  const [cNum, setCNum] = useState("")
  const [cName, setCName] = useState("")
  const [cExp, setCExp] = useState("")
  const [cCVV, setCCVV] = useState("")

  useEffect(() => {
    if(upi && upi.includes("@")){
      setUpiDisable(false)
    }
  }, [upi])

  useEffect(() => {
    if(dName && dNum && dExp && dCVV){
      if(dNum.length === 16 && dExp.length === 4 && dCVV.length === 3 && dName.length > 4){
        setDebitDisable(false)
      }
    }
  }, [dName, dNum, dExp , dCVV])


  useEffect(() => {
    if(cName && cNum && cExp && cCVV){
      if(cNum.length === 16 && cExp.length === 4 && cCVV.length === 3 && cName.length > 4){
        setCreditDisable(false)
      }
    }
  }, [cName, cNum, cExp , cCVV])

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setSuccess(true)
  }
    if (props.currentStep !== 3) {
        return null
      } 

      const RenderScreens = () => {
        const exp = props.isChosen;
        switch (exp) {
          case "1":
             return(
                <Credit 
                  creditDisable={creditDisable} 
                  setCNum={setCNum}
                  setCName={setCName}
                  setCExp={setCExp}
                  setCCVV={setCCVV}
                  handleSubmit={handleSubmit}
                />
            )
            break;
          case "2":
            return(
              <Debit 
                debitDisable={debitDisable} 
                setDNum={setDNum}
                setDName={setDName}
                setDExp={setDExp}
                setDCVV={setDCVV}
                handleSubmit={handleSubmit}
                />
            )
            break;
          case "3":
           return( 
              <UPI 
                setUpi={setUpi} 
                upiDisable={upiDisable} 
                handleSubmit={handleSubmit}
                />
           )
            break;
          default:
            console.log("4")
            break;
        }
      }
      return(
        <React.Fragment>
        <div className="form-group3">
          
          {RenderScreens()}
        </div>
        </React.Fragment>
      );
}

const Credit  = (props) => {
  return(
    <div className="debit">
    <div className="sub">
    <h1>Make Payment using Credit Card</h1>
    <Op1  className="debit-svg"/>
    <TextField 
     style={{ width: "70%", marginLeft:"15%", marginTop:"5%" }}  
     id="outlined-basic" 
     label="Credit Card Number" 
     variant="outlined"
     type="number"
     onChange={(e) => {props.setCNum(e.target.value)}}
     onInput={e => {
         e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16);
       }}
     />
    <TextField 
     id="standard-basic" 
     label="Name on Card"
       type="text"
     onChange={(e) => {props.setCName(e.target.value)}}
     style={{ width: "70%", marginLeft:"15%", marginTop:"2%" }}  
      />
       <TextField 
     id="standard-basic" 
     label="Expiry Date"
     type="number"
     onInput={e => {
         e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4);
       }}
     onChange={(e) => {props.setCExp(e.target.value)}}
     style={{ width: "30%", marginLeft:"15%", marginTop:"2%" }}  
      />
       <TextField 
     id="standard-basic" 
     type="password"
     label="CVV"
     onInput={e => {
         e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3);
       }}
     onChange={(e) => {props.setCCVV(e.target.value)}}
     style={{ width: "30%", marginLeft:"10%", marginTop:"2%" }}  
      />
    </div>

{
      props.creditDisable 
      ? 
      <button disabled className="button-disabled">Pay 99$ using Credit Card</button>
     :
     <button onClick={props.handleSubmit} className="button">Pay 99$ using Credit card</button>

    }
   </div>
  )
}

const Debit  = (props) => {
  return(
    <div className="debit">
    <div className="sub">
    <h1>Make Payment using Debit Card</h1>
     <Op2  className="debit-svg"/>
     <TextField 
      style={{ width: "70%", marginLeft:"15%", marginTop:"5%" }}  
      id="outlined-basic" 
      label="Debit Card Number" 
      variant="outlined"
      type="number"
      onChange={(e) => {props.setDNum(e.target.value)}}
      onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16);
        }}
      />
     <TextField 
      id="standard-basic" 
      label="Name on Card"
        type="text"
      onChange={(e) => {props.setDName(e.target.value)}}
      style={{ width: "70%", marginLeft:"15%", marginTop:"2%" }}  
       />
        <TextField 
      id="standard-basic" 
      label="Expiry Date"
      type="number"
      onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4);
        }}
      onChange={(e) => {props.setDExp(e.target.value)}}
      style={{ width: "30%", marginLeft:"15%", marginTop:"2%" }}  
       />
        <TextField 
      id="standard-basic" 
      type="password"
      label="CVV"
      onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3);
        }}
      onChange={(e) => {props.setDCVV(e.target.value)}}
      style={{ width: "30%", marginLeft:"10%", marginTop:"2%" }}  
       />

    </div>
  {
       props.debitDisable 
       ? 
       <button disabled className="button-disabled">Pay 99$ using Debit Card</button>
      :
      <button onClick={props.handleSubmit} className="button">Pay 99$ using Debit card</button>

     }
    </div>
  )
}

const UPI  = (props) => {
  return(
    <div className="upi">
    <div className="sub">
    <h1>Make Payment using UPI</h1>
     <Op3 className="upi-svg" />
     <TextField 
      style={{ width: "70%", marginLeft:"15%", marginTop:"10%" }}  
      id="outlined-basic" 
      label="ENTER UPI VPA" 
      variant="outlined"
      onChange={(e) => props.setUpi(e.target.value)}
      />
     <p>Your payment credentials are always secured with 128 bit encryption</p>
    </div>
     {
       props.upiDisable 
       ? 
       <button disabled className="button-disabled">Pay 99$ using UPI</button>
      :
      <button onClick={props.handleSubmit} className="button">Pay 99$ using UPI</button>

     }
    </div>
  )
}
export default Step3