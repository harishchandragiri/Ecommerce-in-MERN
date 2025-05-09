import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'

function Register() {

    const [gender, SetGender] = useState('');
    const [Name, SetName] = useState('');
    const [date, Setdate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <main >
        <div className='w-full flex justify-center items-center h-[520px]'>
            <div className=' border rounded-md m-1 shadow-md h-[450px] w-[300px]'>
            <h1 className='block mt-2 h-[35px] text-[20px] font-bold'>Register</h1>
            <hr className='border-[1px] border-black' />
            <form className='relative'>
            <div className='relative w-full h-[25px]'>
              <label className='absolute left-[50px] h-[30px] font-bold'>Name</label>
            </div>
            <input className=' h-[30px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="text" value={Name} onChange={(e)=> SetName(e.target.value)}/>
            <div className='relative w-full h-[25px]'>
              <label className='absolute left-[50px] h-[30px] font-bold'>Date of Birth</label>
            </div>
            <input className=' h-[30px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="date" value={date} onChange={(e)=> Setdate(e.target.value)}/>
            <div className='relative w-full h-[25px]'>
              <label className='absolute left-[50px] h-[30px] font-bold'>Gender</label>
            </div>
            <div className='h-[30px] w-full'>
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
            <div className='relative w-full h-[25px]'>
              <label className='absolute left-[50px] h-[30px] font-bold'>Email</label>
            </div>
            <input className=' h-[30px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <div className='relative w-full h-[25px]'>
              <label className='absolute left-[50px] h-[30px] font-bold'>Password</label>
            </div>
            <input className=' h-[30px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'  type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </form>
            <div className='w-full flex justify-center items-center'>
                <button className='flex bg-slate-300 h-[35px] rounded-md p-1 border-black border-[2px] my-2 w-[200px]'>
                    <span  className='mx-[5px] pt-[5px]'><FcGoogle/></span><span className='mx-[5px] pb-[5px]'>SignIn with Google</span>
                </button>
            </div>
            </div>
        </div>
    </main>
  )
}

export default Register