import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const NavBar = () => {

    const [visible,setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collections' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex justify-between gap-5 py-5 text-sm'>
        <p className='w-2/4 cursor-pointer'>SEARCH</p>

        <div className='group relative'>
            <p className='w-2/4 cursor-pointer'>PROFILE</p>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'> My Profile </p>
                    <p className='cursor-pointer hover:text-black'> Orders </p>
                    <p className='cursor-pointer hover:text-black'> Logout </p>
                </div>
            </div>
        </div>

        <Link to='/cart' className='relative'>
            <p className='w-2/4'>CART</p>
            {/* <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p> */}
        </Link>

        <p onClick={()=>setVisible(ture)} className='w-5 cursor-pointer sm:hidden'>MENU</p>
      </div>
    </div>
  )
}

export default NavBar
