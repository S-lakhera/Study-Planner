import React, { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import Logo from './Logo'

const Navbar = () => {
    const {setIsFormVisible} = useContext(SessionContext)
  return (
    <div className=' flex justify-between px-4 md:px-10  py-3.5 border-b border-slate-400 hover:border-slate-200 transition-all duration-200'>

      {/* <h1 className=' md:text-2xl font-bold'>Study-Planner</h1> */}
      <Logo/>

      <button className='text-xs md:text-lg border cursor-pointer font-semibold rounded-lg  drop-shadow-sm drop-shadow-slate-700  px-3 md:px-6 py-2 md:py-1 active:scale-90 transition-all duration-200 hover:bg-white/3'
      onClick={() => setIsFormVisible(true)}
      >Add New Session</button>

    </div>
  )
}

export default Navbar
