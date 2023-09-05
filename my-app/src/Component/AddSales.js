import React, { useState } from 'react'
import { addsalesaxios } from '../Apis/api';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSales = () => {
    const [productname, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');


    const handleProductName = (event) => {
        setProductName(event.target.value);
      }
    
      const handleQuantity = (event) => {
        setQuantity(event.target.value);
      }
      const handleAmount = (event) => {
        setAmount(event.target.value);
      }
    
      const handleSubmit =async (event) => {
        event.preventDefault();
        console.log(`Submitting:  ${productname} ${quantity} ${amount}`);
        if (productname&&quantity&&amount) {
          const response=await addsalesaxios({productname,quantity,amount});
          toast.success(response.data.message)
        } else {
          toast.error('Please Provide all Input')
        }
      }
  return (
    <div>
    <div>
   <div className='content-in-center'>
     <h2>Add-Sales</h2>
     <div className='register-container '>
     <form className='formbox' onSubmit={handleSubmit}>
         <br/>
  
 
   <div>
     <label >Product-Name:</label>
     <br/>
     <input className='log-reg-input'  id="product-name" value={productname} onChange={handleProductName} />
     
   </div>
   <br/>
   <div>
     <label >Quantity:</label>
     <br/>
     <input className='log-reg-input'  id="quantity" value={quantity} onChange={handleQuantity} />
     <br/>
   </div>
   <br/>
   <div>
     <label >Amount:</label>
     <br/>
     <input className='log-reg-input' id="amount" value={amount} onChange={handleAmount} />
     <br/>
   </div>
   
   <br/>
   <button className='log-reg-input log-reg-btn' type="submit">Add-Sales</button>
  
 </form>
     </div>
   </div>
 </div>
 </div>
  )
}

export default AddSales
