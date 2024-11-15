import React, { useState } from 'react'
import { useEffect } from 'react';
import CartItem from '../components/CartItem';

const cartItems= [
{
  productId:'asdfgfdkj123',
  name:'mackbook',
  stock:40,
  price:10000,
  photo:'asmjckdjdsnsajkdbehdbsakbsaddjbdaj'
},
{
  productId:'vy12j123',
  name:'bike',
  stock:2,
  price:1045000,
  photo:'12132jhsgcgdhfbsakbsaddjbdaj'
},
{
  productId:'vy12j123',
  name:'bike',
  stock:2,
  price:1045000,
  photo:'12132jhsgcgdhfbsakbsaddjbdaj'
},
{
  productId:'12gfdkj123',
  name:'samsung',
  stock:5,
  price:15000,
  photo:'dsnsajkdbehdbsakbsaddjbdaj'
},
{
  productId:'vy12j123',
  name:'bike',
  stock:2,
  price:1045000,
  photo:'12132jhsgcgdhfbsakbsaddjbdaj'
}


]
const subtotal=10000;
const shippingCharge=150;
const tax=Math.round(subtotal*0.13);
const discount=400;
const total= subtotal + tax + shippingCharge;

function Cart() {
  const [couponCode, setcouponCode] = useState('');
  const [isValidCode, setisValidCode] = useState(false);

  useEffect(()=>{
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setisValidCode(true);
      else setisValidCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setisValidCode(false);
    }
  }, [couponCode]);

  return (
    <div className='flex'>
      <main className='w-[80vw] sm:w-[75vw] mx-1'>
        {/* main content of the main tag */}
        {
          cartItems.length > 0 ? (
            cartItems.map((i, index)=> <CartItem key={index} cartItem={i} /> )
          ) : (
              <h1>No Items Added</h1>
            )
        }

      </main>
      <aside className='sm:w-[25vw] mx-1'>
       <div className='text-left p-2 m-1'>
        <p className='my-1'>Subtotal: Rs. {subtotal}</p>
        <p className='my-1'>Shipping Charge: Rs. {shippingCharge}</p>
        <p className='my-1'>Tax: Rs. {tax}</p>
        <p className='my-1'>Discount: Rs. {discount}</p>
        <p className='my-1'><b>Total: Rs. {total}</b></p>
        <input className='border-2 border-black rounded-md sm:w-[150px] w-[110px] my-1 p-1' 
        type="text" 
        placeholder='couponCode' 
        value={couponCode} 
        onChange={(e)=>setcouponCode(e.target.value)} />
       <div>
       {
          couponCode &&(
            isValidCode ? (
              <span className='text-green-700 my-1'>
                Rs. {discount} off using the code <code>{couponCode}</code>
              </span>
            ):(
              <span className='text-red-700 my-1'>
                Invalid Coupon!
              </span>
            )
          )
        }
       </div>
       </div>
      </aside>
    </div>
  )
}

export default Cart