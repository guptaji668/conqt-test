import React, { useState } from 'react'
import Header from '../header/header'
import "./index.css"
import ItemDetails from '../itemDetails'
import Supplier from '../supplier/supplier'
import RecordTable from '../Table/Table'

export default function HomePage() {

  const [checkbox ,setCheckbox]=useState("item")

  return (
    <div>
      
      <Header/>
      <div className='mt-5 '>
        <div className='select-box'>
        <div className='checkbox'>
            <div className='checkbox-input'>
            <input type='checkbox' id="item" name="item"  checked={checkbox ==="item"} onChange={()=>setCheckbox("item")}   />   Item 
            </div>

            <div className='checkbox-input'>

            <input type='checkbox' id="supplier" name="supplier" checked={checkbox==="supplier"} onChange={()=>setCheckbox("supplier")} />  Supplier

            </div>

        </div>

        </div>
      
        
        <div className='container mt-5'>

          {
           checkbox==="item" && (<ItemDetails/>) 
          }
          {
            checkbox ==="supplier" && (<Supplier/>) 
          }

        </div>

        <div className='mt-5'>
          <RecordTable/>

        </div>

     

      </div>

    </div>
  )
}
