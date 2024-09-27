import React from 'react'
import { Link } from 'react-router-dom'
import figure from './image/fig1.jpg'
import mackbook from './image/mackbook.jpg'

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
      <div className='bg-slate-100 p-[10px] flex flex-wrap justify-evenly'>
        {/* Cart start */}
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>
        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>        <Link to={'/productcart'}>
          <div className='bg-slate-50 h-[200px] w-[150px] m-[10px] p-[5px] pt-[15px] rounded-md'>
            <img src={mackbook} alt="" className='h-[120px] w-[120px] ml-[10px] mr-[10px] mb-[5px] rounded-md' />
            <h2 className='font-bold'>Mackbook</h2>
            <h3>Rs.10000</h3>
          </div>
        </Link>       
      </div>
    </div>
  )
}

export default Home