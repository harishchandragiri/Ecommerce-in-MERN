import React, { useState } from 'react'
import ProductCart from '../components/Product-Cart'

function Search() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  const addToCartHandler = () => {}

  return (
    <div className='flex '>
      <aside className='w-[40vw] mx-1 p-2 h-screen sticky top-0'>
        <h2 className='font-bold text-[20px]'>Filters</h2>
        <div className='my-2 py-2'>
          <h4 className='text-left font-black'>Sort</h4>
          <select className='w-full' value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
        <div className='my-2 py-2'>
          <h4 className='text-left font-black'>Category</h4>
          <select className='w-full' value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
          </select>
        </div>
      </aside>
      <main>
          <h1 className='font-bold text-[20px]'>Products</h1>
        <div className='relative h-[30px]'>
          <input className='outline-none px-3 absolute left-5 lg:w-[800px]  md:w-[650px] sm:w-[500px] w-[300px]' type="text" placeholder='Search by name......'  value={search} onChange={e=> setSearch(e.target.value)} />
        </div>
        <div>
        {/* productId='', price='', name='', photo='', stock='' */}
          <ProductCart handler={addToCartHandler} />    
        </div>
      </main>
    </div>
  )
}

export default Search