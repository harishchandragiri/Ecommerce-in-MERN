import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'

function Login() {
    const [gender, SetGender] = useState('');
    const [Name, SetName] = useState('');
    const [date, Setdate] = useState('');

  return (
    <div>
        <main >
            <div className='w-full flex justify-center items-center h-[450px]'>
                <div className=' border rounded-md m-2 shadow-md h-[350px] w-[300px]'>
                <h1 className='block mt-2 h-[40px] text-[20px] font-bold'>Login</h1>
                <hr className='border-[1px] border-black' />
                <form >
                <label className=' h-[40px] my-[10px] w-[80px] font-bold'>Name</label>
                <br />
                <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="text" value={Name} onChange={(e)=> SetName(e.target.value)}/>
                <br />
                <label className=' h-[40px] my-[10px] font-bold'>Date</label>
                <br />
                <input className=' h-[40px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="date" value={date} onChange={(e)=> Setdate(e.target.value)}/>
                <br />
                <label className=' h-[40px] my-[10px] font-bold'>Gender</label>
                <div className='h-[40px]'>
                <label className='m-2' htmlFor="male">Male</label>
                <input type="radio" 
                       id='male'
                       name="gender"
                       value="Male"
                       checked={gender === "Male"}
                       onChange={(e)=> SetGender(e.target.value)}/>
   
                <label className='m-2' htmlFor="female">Female</label>
                <input type="radio" 
                       id='female'
                       name="gender"
                       value="Female"
                       checked={gender === "Female"}
                       onChange={(e)=> SetGender(e.target.value)}/>
         
                <label className='m-2' htmlFor="Others">Other</label>
                <input type="radio" 
                       id='Others'
                       name="gender"
                       value="Other"
                       checked={gender === "Other"}
                       onChange={(e)=> SetGender(e.target.value)}/>
                </div>
                </form>
                <div className='w-full flex justify-center items-center'>
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