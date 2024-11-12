import React, { useState } from 'react'

const subtotal=10000;
const shippingCharge=150;
const tax=Math.round(subtotal*0.13);
const discount=400;
const total= subtotal + tax + shippingCharge;

function Cart() {
  const [couponCode, setcouponCode] = useState('');
  const [isValidCode, setisValidCode] = useState(true)
  return (
    <div className='block sm:flex'>
      <main className='w-full sm:w-[75vw] mx-1 h-56'>
        {/* main content of the main tag */}
        
      </main>
      <aside className='w-full sm:w-[25vw] mx-1'>
       <div className='text-left p-2 m-1'>
        <p className='my-1'>Subtotal: Rs. {subtotal}</p>
        <p className='my-1'>Shipping Charge: Rs. {shippingCharge}</p>
        <p className='my-1'>Tax: Rs. {tax}</p>
        <p className='my-1'>Discount: Rs. {discount}</p>
        <p className='my-1'><b>Total: Rs. {total}</b></p>
        <input className='border-2 border-black rounded-md w-[150px] my-1 p-1' 
        type="text" 
        placeholder='couponCode' 
        value={couponCode} 
        onChange={(e)=>setcouponCode(e.target.value)} />
       <div>
       {
          couponCode && isValidCode ? (
            <span className='my-1'>
              Rs. {discount} off using the code <code>{couponCode}</code>
            </span>
          ):(
            <span className='text-red-700 my-1'>
              Invalid Coupon!
            </span>
          )
        }
       </div>
       </div>
      </aside>
    </div>
  )
}

export default Cart