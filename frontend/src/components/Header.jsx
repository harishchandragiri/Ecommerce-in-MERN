import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'


const user ={ _id: '1'};

function Header() {

    const [isOpen, setisOpen]= useState(false)

    const handleClick=()=>{
        setisOpen(false);
    }

  return (
    <nav className='bg-slate-300 flex justify-end items-center h-[60px] '>
        <Link className=' p-[20px] ' onClick={()=> setisOpen(false)} to={"/"}>Home</Link>
        <Link className=' p-[20px] ' onClick={()=> setisOpen(false)} to={"/search"}>
            <FaSearch />
        </Link>
        <Link className=' p-[20px] ' onClick={()=> setisOpen(false)} to={'/Cart'}>
            <FaShoppingBag/>
        </Link>
        {
            user?._id?(
                <div className='relative'>
                    <button className='p-[20px]' onClick={()=> setisOpen((prev)=> !prev)}>
                        <FaUser/>
                    </button>
                    <div className='absolute top-[30px] right-0 mt-2 w-44 border-1 rounded-md'>
                        <dialog open={isOpen} className='border-1 rounded-md'>
                            <div className='flex justify-end items-center h-[20px] border-red-500 border-2 rounded-md bg-orange-200'>
                                {
                                    user.role==='admin' && (
                                        // route of admin dashboard
                                        <Link className='pr-[5px] pl-[5px]' onClick={()=> setisOpen(false)} to='/admin/dashboard'>Admin</Link>
                                    )
                                }
                                <Link className=' pr-[10px] pl-[5px]' onClick={()=> setisOpen(false)} to='/orders'>Orders</Link>
                                <button className=' pr-[5px]' onClick={handleClick}>
                                    <FaSignOutAlt/>
                                </button>
                            </div>
                        </dialog>
                    </div>
                </div>
            ):(
                <Link className=' p-[20px] '  to={'/login'}>
                    <FaSignInAlt/>
                </Link>
            )
        }
    </nav>
  )
}

export default Header