import React, { useState } from 'react'
import {BiArrowBack} from 'react-icons/bi';

function Shipping() {
    const [shippingInfo, setshippingInfo] = useState({
        address: "",
        city:'',
        state:'',
        country:'',
        pinCode:'',
    })

    const changeHandler = (e) => {
        setshippingInfo((prev)=>({...prev, [e.target.name]:e.target.value}))
    }

    // To stop the rerendring of the page
    // const submitForm = (e) => {

    // }

  return (
    <div className='flex'>
        <button className='border rounded-[50%] px-[10px] h-[40px] w-[40px] m-1 bg-gray-400 z-10'>
            <BiArrowBack/>
        </button>
       <div className='w-full flex justify-center items-center h-[500px]'>
       <form className=' border rounded-md m-2 shadow-md h-[400px] w-[300px]'>
            <h1 className='font-bold m-3'>Shipping Address</h1>
            <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]' required type="text" placeholder='Address' name='address' value={shippingInfo.address} onChange={changeHandler}/>
            <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]' required type="text" placeholder='City' name='city' value={shippingInfo.city} onChange={changeHandler}/>
            <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]' required type="text" placeholder='State' name='state' value={shippingInfo.state} onChange={changeHandler}/>
            <select className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]' required name="country" value={shippingInfo.country} onChange={changeHandler} >
                <option value="">Choose Country</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
            </select>
            <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]' required type="text" placeholder='Pincode' name='pinCode' value={shippingInfo.pinCode} onChange={changeHandler}/>
            <br />
            <button className=' bg-slate-300 h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]' type='submit'>Pay Now</button>
        </form>
       </div>
    </div>
  )
}

export default Shipping