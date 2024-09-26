import React, { useEffect, useState } from 'react'
import "./supplier.css"

import axios from 'axios';
import SubmitButton from '../SubmitButton/submit';

export default function SupplierDetails() {
  const [formData, setFormData] = useState({
    supplierName :'',
    companyName: '',
    countryId: "1",
    stateId:"1",
    cityId:'1',
    email:"",
    phoneCode: "+91",

  });

  const [countries ,setContries] =useState([])
  const states =["MP", "UP"]

  const fetchCountry=async()=>{
    try {
      
      const response =await axios.get("https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList")
      const result =response?.data?.data?.countyList
      console.log("response",result)
      setContries(result)

    } catch (error) {
      console.log("errror",error)
      
    }

  }

  useEffect(()=>{
    fetchCountry()

  },[])

  console.log("supplier",formData)
 
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div className='sup-contanier'>
      <h1>
      Supplier Details
      </h1>

      <div className='supplier-details-form mt-5'>
        <div className='form-field'>
          <div className=''>
            <span>Supplier Name </span>

            <input type='text' id="suppliername" name="supplierName" placeholder='Enter supplier Name'  onChange={handleInputChange}/>
            <p>Max 50 characters</p>

          </div>
          <div className=''>
            <span>Company Name</span>
          <input type='text' id="companyname" name="companyName" placeholder='Enter company name'  onChange={handleInputChange}/>
          <p>Max 50 characters</p>

          </div>

        </div>
        
        <div className='form-field'>
          <div className=''>
            <span>Country</span>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
             {countries?.map((country) => (
               <option key={country.countryId} value={country.name}>
               {country.name}
             </option>
              ))}
            </select>
            <p>select country from the list</p>

          </div>
          <div className=''>
          <span>State</span>
          <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
           <p>select state from the list</p>

          </div>

        </div>

        <div className='form-field'>
          <div className=''>
            <span>City </span>

            <input type='text' id="city" name="city" placeholder='Enter city'  onChange={handleInputChange}/>
            <p>Max 50 characters</p>

          </div>
          <div className=''>
            <span>Email Address</span>
          <input type='text' id="email" name="email" placeholder='Enter email'  onChange={handleInputChange}/>
          <p>Max 50 characters</p>

          </div>

        </div>

      </div>

      <div className='mt-5'>
        <SubmitButton supplierdata={formData} setFormData={setFormData}/>

      </div>
    
    
        
     </div>
  )
}
 