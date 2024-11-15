import React from 'react';
import {Link} from "react-router-dom";
import {FaTrash} from 'react-icons/fa';

function CartItem({cartItem}) {
  const {photo, productId, name, price, stock} = cartItem;

  return (
    <div className='w-full h-[200px]  border m-1 my-1 flex items-center'>
      <img className='w-[150px] h-[150px] border m-1' src={photo} alt={name} />
   <div className='flex items-center ml-auto space-x-10 m-2'>
   <article>
       <Link className='font-bold' to={`/product/${productId}`}>{name}</Link>
       <br />
       <span className='font-bold'>Rs. {price}</span>
      </article>
      <div>
        <button className='border-black w-[25px] rounded-md border-[2px] bg-yellow-200 m-1'>-</button>
        <p className='font-bold m-1'>{stock}</p>
        <button className='border-black w-[25px] rounded-md border-[2px] bg-yellow-200 m-1'>+</button>
      </div>
      <button>
        <FaTrash></FaTrash>
      </button>
   </div>
    </div>
  )
}

export default CartItem;