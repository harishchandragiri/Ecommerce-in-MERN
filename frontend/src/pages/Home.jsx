import React from 'react'
import { Link } from 'react-router-dom'
import ProductCart from '../components/Product-Cart'
import figure from './image/fig1.jpg'

function Home() {
  return (
    <div>
      <div className='bg-slate-200 sm:h-[350px] h-[250px] flex justify-center items-center'>
        <img src={figure} className='sm:h-[330px] h-[230px] w-[90%]  rounded-md' />
      </div>
      <div className='bg-slate-50 h-[45px] flex items-center justify-between'>
        <h1 className='m-[20px] p-[5px] font-bold'>
          Latest Products
        </h1>
        <Link className='m-[20px] p-[5px]'>
          More
        </Link>
      </div>
      <div >
        <ProductCart productId={12132432355} name='Mackbook' price={100000} stock={123} photo='imagename' />
      </div>
    </div>
  )
}

export default Home