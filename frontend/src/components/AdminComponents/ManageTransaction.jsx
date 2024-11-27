import React, { useState } from 'react'
import AdminSideBar from '../../components/AdminComponents/AdminSideBar'
import figure from '../../pages/image/mackbook.jpg'

function ManageTransaction() {

  const [selectedOption, setSelectedOption] = useState('processing');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the selected option
    // console.log('Selected option:', selectedOption);
  };

  return (
    <div className='relative flex h-[89.6vh] overflow-x-hidden'>
      <AdminSideBar />
      <div className='absolute left-0 sm:left-64 w-full h-full sm:pr-64 flex justify-center items-center'>

        {/* order information */}
        <div className='bg-orange-100 m-2 sm:m-4 block w-[250px] border border-black rounded-sm'>
          <h1 className='font-bold m-2'>ORDER INFO</h1>
          <div className='my-1 mx-4 px-2'>
            <h2 className='font-bold text-left '>User Info:</h2>
            <p className=' text-left '>Name: ----</p>
            <p className=' text-left '>Address: ----</p>
          </div>
          <div className='my-1 mx-4 px-2'>
            <h2 className='font-bold text-left '>Amount Info:</h2>
            <p className=' text-left '>Subtotal:  ----</p>
            <p className=' text-left '>Shipping Charges:  ----</p>
            <p className=' text-left '>Tax:  ----</p>
            <p className=' text-left '>Discount:  ----</p>
            <p className=' text-left '>Total:  ----</p>
          </div>
          <form className='w-full' onSubmit={handleSubmit}>
            <h2 className='font-bold text-left mx-4 px-2'>Status Info:</h2>
          <div>
        <input
          type="radio"
          value="processing"
          checked={selectedOption === 'processing'}
          onChange={handleOptionChange}
        />
        <label className='mx-1'>Processing</label>
        <input
            type="radio"
            value="delivered"
            checked={selectedOption === 'delivered'}
            onChange={handleOptionChange}
            />
            <label className='mx-1'>Delivered</label>
        </div>
        <button className='bg-green-300 h-[40px] w-[200px] rounded-md border-[2px] my-3 border-black'>Process Status</button>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default ManageTransaction