import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'

function Login() {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

  return (
    <div>
        <main >
            <div className='w-full flex justify-center items-center h-[450px]'>
                <div className=' border rounded-md m-2 shadow-md h-[350px] w-[300px]'>
                <h1 className='block mt-2 h-[40px] text-[20px] font-bold'>Login</h1>
                <hr className='border-[1px] border-black' />
                <form className='relative'>
                <div className='relative w-full h-[25px]'>
                  <label className='absolute left-[50px] h-[40px] font-bold'>Email</label>
                </div>
                <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="email" value={email} onChange={(e)=> SetEmail(e.target.value)}/>
                <div className='relative w-full h-[25px]'>
                  <label className='absolute left-[50px] h-[40px] font-bold'>Password</label>
                </div>
                <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="password" value={password} onChange={(e)=> SetPassword(e.target.value)}/>

                </form>
                <div className='mt-7 w-full flex justify-center items-center'>
                    <button className='flex bg-slate-300 h-[35px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'>
                        <span  className='mx-[5px] pt-[5px]'><FcGoogle/></span><span className='mx-[5px] pb-[5px]'>SignIn with Google</span>
                    </button>
                </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Login