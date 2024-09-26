import React from 'react'
import "./submit.css"
import axios from 'axios'
import SupplierDetails from '../supplier/supplier'

export default function SubmitButton({itemData ,setFormData ,supplierdata}) {

  const handleSubmit= async()=>{

    try {
  
      const response = await axios.post("https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers ",{
        itemDetails:{
          itemName:itemData.itemName,
          quantity:itemData?.quantity,
          unitPrice:itemData?.unitPrice,
          submissionDate:itemData?.submissionDate,
          currency:"$",
  
  
        },

      //   "supplier":{ 
  
      //     "supplierName":supplierdata?.supplierName, 
  
      //     "companyName":supplierdata?.companyName, 
  
      //     "email":supplierdata?.email, 
  
      //     "phoneCode":supplierdata?.phoneCode, 
  
      //     "phoneNumber":"7007402688", 
  
      //     "countryId":supplierdata?.countryId, 
  
      //     "stateId":supplierdata?.stateId, 
  
      //     "cityId":supplierdata?.cityId,  
  
      // }
      "supplier":{ 

        "supplierName":"Adil", 

        "companyName":"Apple", 

        "email":"smail@apple.co", 

        "phoneCode":"+91", 

        "phoneNumber":"7007402688", 

        "countryId":"1", 

        "stateId":"1", 

        "cityId":"1" 

    } 
      })
      console.log("res-data",response)
  
      if(response.status==200){
        alert("item added successfully")
        setFormData("")
      }
      else{
        alert("error")
      }
      
    } catch (error) {
      console.error(error)
      
    }
  
  
  }


  return (
   <div className='btn-container'>
    <h1>Submitted Data</h1>
    <h6>The data submitted by users will be displayed below</h6>

    <div className='btn-section'>
        <button className='btn' onClick={handleSubmit}>Save Changes</button>
    </div>


    </div>
  )
}
