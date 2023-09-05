import React, { useEffect, useState } from 'react'
import { gettotalsumaxios } from '../Apis/api'

const TodaysHighestRevenue = () => {
  const [totalsum ,setTotalsum]=useState('')

  useEffect(()=>{
    totalsumofsales();
  },[])


  const totalsumofsales=async()=>{
    const {data}=await gettotalsumaxios();
    setTotalsum(data.totalAmount)
  }

  console.log(totalsum)
  return (
    <div>
      <div className='content-in-center'>
      <h2>TODAY'S REVENUE IS {totalsum}</h2>
      </div>
    </div>
  )
}

export default TodaysHighestRevenue
