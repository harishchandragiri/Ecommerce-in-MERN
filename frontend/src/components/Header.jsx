import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'


const user ={ _id: '1', role: 'admin'};

function Header() {

    const [isOpen, setisOpen]= useState(false)

    const handleClick=()=>{
        setisOpen(false);
    }

  return (
    <nav>
        <Link onClick={()=> setisOpen(false)} to={"/"}>Home</Link>
        <Link onClick={()=> setisOpen(false)} to={"/search"}>
            <FaSearch />
        </Link>
        <Link onClick={()=> setisOpen(false)} to={'/Cart'}>
            <FaShoppingBag/>
        </Link>
        {
            user?._id?(
                <>
                <button onClick={()=> setisOpen((prev)=> !prev)}>
                    <FaUser/>
                </button>
                <dialog open={isOpen}>
                    <div>
                        {
                            user.role==='admin' && (
                                // route of admin dashboard
                                <Link onClick={()=> setisOpen(false)} to='/admin/dashboard'>Admin</Link>
                            )
                        }
                        <Link onClick={()=> setisOpen(false)} to='/orders'>Orders</Link>
                        <button onClick={handleClick}>
                            <FaSignOutAlt/>
                        </button>
                    </div>
                </dialog>
                </>
            ):(
                <Link  to={'/login'}>
                    <FaSignInAlt/>
                </Link>
            )
        }
    </nav>
  )
}

export default Header