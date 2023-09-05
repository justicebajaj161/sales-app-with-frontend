import axios from 'axios'


const URL=`https://salesapprender.onrender.com`;


const registerUser=async(data)=>{
    try {
        return await axios.post(`${URL}/api/auth/register`,data)
        
        
      } catch (error) {
         console.log('error while calling the user api',error)
      }
}
const loginUser=async(data)=>{
    try {
        return await axios.post(`${URL}/api/auth/login`,data)
        
        
      } catch (error) {
         console.log('error while calling the user api',error)
      }
}

const addsalesaxios=async(data)=>{
    try {
        return await axios.post(`${URL}/api/auth/addsales`,data)
        
        
      } catch (error) {
         console.log('error while calling the user api',error)
      }
}
const gettopfivesalesaxios=async()=>{
    try {
        return await axios.get(`${URL}/api/auth/gettopfivesales`)
        
        
      } catch (error) {
         console.log('error while calling the user api',error)
      }
}
const gettotalsumaxios=async()=>{
    try {
        return await axios.get(`${URL}/api/auth/gettotalsum`)
        
        
      } catch (error) {
         console.log('error while calling the user api',error)
      }
}


export {registerUser,loginUser,addsalesaxios,gettopfivesalesaxios,gettotalsumaxios};