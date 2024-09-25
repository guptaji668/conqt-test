import React from 'react'
import Header from '../header/header'
import "./index.css"
import ItemDetails from '../itemDetails'

export default function HomePage
() {
  return (
    <div>
      
      <Header/>
      <div className='mt-5 '>
        <div className='select-box'>
        <div className='checkbox'>
            <div className='checkbox-input'>
            <input type='checkbox' id="item"  />   Item 
            </div>

            <div className='checkbox-input'>

            <input type='checkbox' id="Supplier" />  Supplier

            </div>

        </div>

        </div>
      
        
        <div className='mt-5 container'>

        <ItemDetails/>
        </div>

     

      </div>

    </div>
  )
}
