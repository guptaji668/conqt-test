import React from 'react'
import "./supplier.css"

export default function ItemDetails() {
  return (
    <div>
      <h1>
      Supplier Details
      </h1>

      <div className='details-form'>
        <div className='row form-field'>
          <div className='col-6'>
            <span>Item Name</span>

            <input type='text' id="name" name="name" placeholder='Enter Item Name'/>
            <p>Max 50 characters</p>

          </div>
          <div className='col-6'>
            <span>Quantity</span>
          <input type='text' id="quantity" name="quantity" placeholder='Enter quantity'/>
          <p>Max 50 characters</p>

          </div>

        </div>
        <div className='row form-field'>
          <div className='col-6'>
            <span>Unit Price</span>
            <input type='text' id="unitprice" name="unitprice" placeholder='Enter unit price'/>
            <p>Max 50 characters</p>

          </div>
          <div className='col-6'>
          <span>Date of Submission</span>
          <input type='text' id="date" name="date"
           placeholder='Select date'/>
           <p>Max 50 characters</p>

          </div>

        </div>

      </div>
    
        
     </div>
  )
}
 