import React, { useEffect, useState } from 'react'
import { gettopfivesalesaxios } from '../Apis/api';

const SalesTable = () => {
  const [top5sales,setTopfivesales]=useState('')

  useEffect(()=>{
    gettopfivesales();
  },[])

  const gettopfivesales=async()=>{
   const {data}=await gettopfivesalesaxios();
   setTopfivesales(data.salesFromToday)
  }

  console.log(top5sales)
  return (
    <div className='content-in-center'>
        <h2>Top-5-Sales</h2>
        <br/>
    <table className='table-sales'>
      <thead className='border border-dark'>
        <tr className='border border-dark p-3'>
          <th className='border border-dark p-3'>#</th>
          <th className='border border-dark p-3'>Sales ID</th>
          <th className='border border-dark p-3'>Product Name</th>
          <th className='border border-dark p-3'>Quantity</th>
          <th className='border border-dark p-3'>Sale Amount</th>
        </tr>
      </thead>
      <tbody>
        {top5sales&&top5sales.map((sales,index)=>{
          return  <tr key='' className='border border-dark'>
          <td className='p-2'>{index+1}</td>
          <td className='p-2'>S121{index+1}</td>
          <td className='p-2'>{sales.productname}</td>
          <td className='p-2'>{sales.quantity}</td>
          <td className='p-2'>{sales.amount}</td>
        </tr>
        })}
     
             
          {/* <tr key='' className='border border-dark'>
            <td className='p-2'>2</td>
            <td className='p-2'>S1245</td>
            <td className='p-2'>Laptop</td>
            <td className='p-2'>5</td>
            <td className='p-2'>4500</td>
          </tr> */}
        {/* {salesData.map((sale, index) => (
          <tr key={sale.salesId}>
            <td>{index + 1}</td>
            <td>{sale.salesId}</td>
            <td>{sale.productName}</td>
            <td>{sale.quantity}</td>
            <td>{sale.saleAmount}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
    </div>
  )
}

export default SalesTable
