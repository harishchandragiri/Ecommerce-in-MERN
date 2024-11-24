import React from 'react'
import AdminSideBar from '../../components/AdminComponents/AdminSideBar'
import figure from '../../pages/image/mackbook.jpg'


function ManageProduct() {
  return (
    <div className='relative flex h-[89.6vh] overflow-x-hidden'>
      <AdminSideBar />
      <div className='absolute left-0 sm:left-64 w-full h-full sm:pr-64 flex justify-center items-center'>
        <div className='bg-orange-100 m-2 sm:m-4 block w-[200px] border border-black rounded-sm'>
          <p className='h-[30px] m-3'>Stocks Avaliable</p>
          <img className='h-[200px] w-[175px] mx-3 my-2 border-[2px] rounded-md' src={figure} alt="mackbook" />
          <h2 className='font-bold m-2 p-1'>Name</h2>
          <p className='font-bold m-2 p-1'>Price</p>
        </div>
        <div className='bg-orange-100 m-2 sm:m-4 block w-[250px] border border-black rounded-sm'>
          <h1 className='font-bold m-2'>Manage</h1>
          <form className='w-full' action="">
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Product Name' />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Price' />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Stock' />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="file"  />
            <div className='w-full flex justify-center'>
              <img className='h-[80px] w-[80px] mb-1 border-[2px] rounded-md' src={figure} alt="Mackbook" />
            </div>
            <button className='bg-green-300 h-[40px] w-[200px] rounded-md border-[2px] mb-3 border-black'>Update</button>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default ManageProduct