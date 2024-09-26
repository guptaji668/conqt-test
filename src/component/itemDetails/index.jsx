import React, { useState } from 'react'
import "./itemdetails.css"
import SubmitButton from '../SubmitButton/submit'
import axios from 'axios'

export default function ItemDetails() {


  const [formData,setFormData]=useState({
    itemName:"",
    quantity:"",
    unitPrice:"",
    submissionDate:""
    

  })

  const handleChange =(e)=>{
    const{name ,value} = e.target
    setFormData((prev)=>(
      {
        ...prev,
        [name]:value

      }
    ))
  }
console.log("formdata",formData)




  return (
    <div className='details-container'>
      <h1>
      Item Details
      </h1>

      <div className='details-form mt-3'>
        <div className='form-field'>
          <div className=''>
            <span>Item Name</span>

            <input type='text' id="name" name="itemName" placeholder='Enter Item Name'  onChange={handleChange} />
            <p>Max 50 characters</p>

          </div>
          <div className=''>
            <span>Quantity</span>
          <input type='text' id="quantity" name="quantity" placeholder='Enter quantity'  onChange={handleChange} />
          <p>Max 50 characters</p>

          </div>

        </div>
        <div className='form-field'>
          <div className=''>
            <span>Unit Price</span>
            <input type='text' id="unitprice" name="unitPrice" placeholder='Enter unit price'  onChange={handleChange}/>
            <p>Max 50 characters</p>

          </div>
          <div className=''>
          <span>Date of Submission</span>
          <input type='date' id="date" name="submissionDate"
           placeholder='Select date'  onChange={handleChange}/>
           <p>Max 50 characters</p>

          </div>

        </div>

      </div>

      <div className='mt-5'>
        <SubmitButton  itemData={formData}/>

      </div>
    
        
     </div>
  )
}
 