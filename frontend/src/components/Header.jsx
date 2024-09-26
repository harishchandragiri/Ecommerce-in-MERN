import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'


const user ={ _id: '1', role: 'admin'};

function Header() {

    const [isOpen, setisOpen]= useState(false)

  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>
            <FaSearch />
        </Link>
        <Link to={'/Cart'}>
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
                                <Link to='/admin/dashboard'>Admin</Link>
                            )
                        }
                        <Link to='/orders'>Orders</Link>
                        <button>
                            <FaSignOutAlt/>
                        </button>
                    </div>
                </dialog>
                </>
            ):(
                <Link to={'/login'}>
                    <FaSignInAlt/>
                </Link>
            )
        }
    </nav>
  )
}

export default Header