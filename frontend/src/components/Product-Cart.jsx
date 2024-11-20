import React from 'react'
import { Link } from 'react-router-dom'
import mackbook from '../pages/image/mackbook.jpg'

function ProductCart({productId, price, name, photo, stock, handler}) {
  return (
    <div className='bg-slate-100 p-[10px] flex flex-wrap justify-evenly'>
      {/* linked div for product */}
           <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={`/${photo}`} alt={name} className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>{name}</h2>
            <h3>Rs.{price}</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>



      {/* remove it from here */}
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>       
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[240px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md hover:bg-slate-300'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
            <button className='m-1 p-1 rounded-md text-green-800 bg-orange-500'>Add to Cart</button>
          </div>
        </Link>    
    </div>
  )
}

export default ProductCart