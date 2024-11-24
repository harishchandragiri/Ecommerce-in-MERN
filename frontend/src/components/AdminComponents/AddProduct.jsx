import React from 'react'
import AdminSideBar from '../../components/AdminComponents/AdminSideBar'
import figure from '../../pages/image/mackbook.jpg'

function AddProduct() {
  return (
    <div className='relative flex h-[89.6vh] overflow-x-hidden'>
      <AdminSideBar />
      <div className='absolute left-0 sm:left-64 w-full h-full sm:pr-64 flex justify-center items-center'>
      <div className='bg-orange-100 m-2 sm:m-4 block w-[250px] border border-black rounded-sm'>
          <h1 className='font-bold m-3'>Add Product</h1>
          <form className='w-full' action="">
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Product Name' />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Price' />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Stock' />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="file"  />
            <div className='w-full flex justify-center'>
              <img className='h-[80px] w-[80px] m-1 border-[2px] rounded-md' src={figure} alt="Mackbook" />
            </div>
            <button className='bg-green-300 h-[40px] w-[200px] rounded-md border-[2px] my-4 border-black'>Add</button>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default AddProduct