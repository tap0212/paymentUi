import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Countries from '../Assets/countries.json'
import './steps.scss'

export default function Step1(props) {


  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  useEffect(() => {
    if(fName && lName && address && city ){
      if(fName.length > 2 && lName.length > 2 && address.length> 5 && city.length > 2){
        props.setNextDisabled(false)
        
      }
    }
  }, [fName, lName, address, city])

    if (props.currentStep !== 1) {
        return null
      } 
      return(
        <div className="form-group1">
         <h1>We need some details</h1>
         <div className="input11">
         <TextField 
          id="outlined-basic" 
          style={{width:"40%"}} 
          label="First Name" 
          variant="outlined" 
          onChange={(e) => setFName(e.target.value)} 
          />
         <TextField 
          style={{marginLeft:"5%", width:"40%"}} 
          id="outlined-basic" 
          label="Last Name" 
          variant="outlined" 
          onChange={(e) => setLName(e.target.value)} 
          />
         </div>
  

         <div className="input12">
         <TextField 
          style={{ width: "89%" }} 
          id="outlined-basic" 
          label="Address" 
          variant="outlined" 
          onChange={(e) => setAddress(e.target.value)}
           />
         </div>

         <div className="input12">
         <TextField 
          style={{ width: "89%" }} 
          id="outlined-basic" 
          label="City" 
          variant="outlined" 
          onChange={(e) => setCity(e.target.value)} 
          type="text"
          />
         </div>
        <div>
            <Autocomplete
            className="input12"
            id="combo-box-demo"
            options={Countries}
            getOptionLabel={(option) => option.name}
            style={{ width: "85%" }}
            onChange={(e) => setCountry(e.target.value)} 
            renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
            />
        </div>        

        </div>
      )
}
