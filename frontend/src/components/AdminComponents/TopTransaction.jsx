import React from 'react'

function TopTransaction() {

    const orders = [
        {
          id: '1234',
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
          {
            id: '1234567890lkj',
            quantity: 1,
            discount: 0,
            amount: 165176,
            status: 'Processing',
          },
          {
            id: '1234567890lkj',
            quantity: 1,
            discount: 0,
            amount: 165176,
            status: 'Processing',
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
<div>    
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">ID</th>
          <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Amount</th>
          <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Discount</th>
          <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Quantity</th>
          <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-2 text-gray-700">{order.id}</td>
            <td className="px-4 py-2 text-gray-700">{order.quantity}</td>
            <td className="px-4 py-2 text-gray-700">{order.discount}</td>
            <td className="px-4 py-2 text-gray-700">{order.amount}</td>
            <td className="px-4 py-2 text-gray-700">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default TopTransaction