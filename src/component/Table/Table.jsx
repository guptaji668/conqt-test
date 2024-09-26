import React from "react";
import "./table.css"

export default function RecordTable() {

    const tableData=[
        {
            supplier:"Rohan",
            itemname:"pliviaa",
            quantiy:25,
            unitprice:1500,
            city: 'Gwalior',
            country:"India",
            email:"rr@gmail.com",
            phone:"7896541330"
        },
        {
            supplier:"Rohan",
            itemname:"pliviaa",
            quantiy:25,
            unitprice:1500,
            city: 'Gwalior',
            country:"India",
            email:"rr@gmail.com",
            phone:"7896541330"
        },
        {
            supplier:"Rohan",
            itemname:"pliviaa",
            quantiy:25,
            unitprice:1500,
            city: 'Gwalior',
            country:"India",
            email:"rr@gmail.com",
            phone:"7896541330"
        },
        {
            supplier:"Rohan",
            itemname:"pliviaa",
            quantiy:25,
            unitprice:1500,
            city: 'Gwalior',
            country:"India",
            email:"rr@gmail.com",
            phone:"7896541330"
        },
    ]

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th> Supplier </th>
            <th> Item Name </th>
            <th> Quantity </th>
            <th> Unit Price </th>
            <th> City </th>
            <th> Country </th>
            <th> Email </th>
            <th> Phone Number </th>
          </tr>
        </thead>
        <tbody>
            {
                tableData?.map((data, index) => 
                <tr key={index} className={index % 2==0 ?"even": "odd" } >
                    <td>{data.supplier}</td>
                    <td>{data.itemname}</td>
                    <td>{data.quantiy}</td>
                    <td>{data.unitprice}</td>
                    <td>{data.city}</td>
                    <td>{data.country}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>


                </tr>
                )
            }
        </tbody>

      </table>
    </div>
  );
}
