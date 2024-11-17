import React from 'react'

function OrderDetails() {

    // {
    //     id: '1234567890lkj',
    //     quantity: 1,
    //     discount: 0,
    //     amount: 165176,
    //     status: 'Processing',
    //   },

  return (
    <div className='w-screen p-3 flex justify-center items-center'>
        <div className='w-full md:mx-[100px] md:px-[100px] sm:mx-[50px] sm:px-[50px] mx-3 px-3'>
            <h1 className='font-bold my-5 md:text-[30px] md:mb-11'>Order Detail</h1>
            <p className='text-left md:text-[20px] md:my-1 my-2 py-2'>Order ID:{} </p>
            <p className='text-left md:text-[20px] md:my-1 my-2 py-2'>Orderby:{} </p>
            <p className='text-left md:text-[20px] md:my-1 my-2 py-2'>Ordered Date:{} </p>
            <p className='text-left md:text-[20px] md:my-1 my-2 py-2'>Quantity:{} </p>
            <p className='text-left md:text-[20px] md:my-1 my-2 py-2'>Discount:{} </p>
            <p className='text-left md:text-[20px] md:my-1 my-2 py-2'>Amount:{} </p>
            <p className='text-left md:text-[20px] md:my-1 my-2 py-2'>Status:{} </p>
        </div>
    </div>
  )
}

export default OrderDetails