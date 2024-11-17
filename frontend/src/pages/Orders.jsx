import React from 'react'
import { Link } from 'react-router-dom';

function Orders() {
    const orders = [
        {
          id: '6546a0272255f90fda46b4f1',
          quantity: 1,
          discount: 0,
          amount: 165176,
          status: 'Delivered',
        },
        {
            id: '1234567890lkj',
            quantity: 1,
            discount: 0,
            amount: 165176,
            status: 'Processing',
          },
      ];

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-6">MY ORDERS</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Id</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Quantity</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Discount</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-gray-700">{order.id}</td>
                <td className="px-4 py-2 text-gray-700">{order.quantity}</td>
                <td className="px-4 py-2 text-gray-700">{order.discount}</td>
                <td className="px-4 py-2 text-gray-700">{order.amount}</td>
                <td className="px-4 py-2 text-gray-700">
                  <span className="px-2 py-1 text-sm rounded-full bg-red-100 text-red-600">
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                <Link
                    to={`/order/${order.id}`}
                    className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                    View
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders