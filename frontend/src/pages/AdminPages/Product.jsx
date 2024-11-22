import React from 'react'
import { Link } from 'react-router-dom';
import AdminSideBar from '../../components/AdminComponents/AdminSideBar'
import figure from '../image/mackbook.jpg'

function Product() {
  const orders = [
    {
      id: '1234',
      quantity: 1,
      discount: 0,
      amount: 165176,
      status: 'Delivered',
      figure1: figure,
    },
    {
        id: '1234567890lkj',
        quantity: 1,
        discount: 0,
        amount: 165176,
        status: 'Processing',
        figure1: figure,
      },
      {
        id: '1234567890lkj',
        quantity: 1,
        discount: 0,
        amount: 165176,
        status: 'Processing',
        figure1: figure,
      },
      {
        id: '1234567890lkj',
        quantity: 1,
        discount: 0,
        amount: 165176,
        status: 'Processing',
        figure1: figure,
      },
      {
        id: '1234567890lkj',
        quantity: 1,
        discount: 0,
        amount: 165176,
        status: 'Processing',
        figure1: figure,
      },
  ];

  return (
    <div className='relative flex h-[89.6vh] overflow-x-hidden'>
      <AdminSideBar />
      <div className='absolute left-0 sm:left-64 w-full sm:pr-64'>
      <div className="px-2 py-2 ">
      <div className='p-2 flex justify-between'>       
        <h1 className="text-2xl mx-4 font-bold mb-6">Products</h1>
        <Link to={`/admin/addproduct`}  className="mx-4 px-4 py-1 text-white h-[35px] bg-blue-500 rounded hover:bg-blue-600">Add</Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Photo</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Price</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Stock</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-gray-700 flex justify-center items-center">
                  <img className='h-[150px] w-[250px] border-[2px] rounded-md' src={order.figure1} alt={order.id} />
                </td>
                <td className="px-4 py-2 text-gray-700">{order.quantity}</td>
                <td className="px-4 py-2 text-gray-700">{order.discount}</td>
                <td className="px-4 py-2 text-gray-700">{order.amount}</td>
                <td className="px-4 py-2">
                <Link
                    to={`/admin/${order.id}`}
                    className="px-5 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                    Manage
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Product