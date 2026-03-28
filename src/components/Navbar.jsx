import React, { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import Logo from './Logo'

const Navbar = () => {
    const {setIsFormVisible} = useContext(SessionContext)
  return (
    <div className=' flex justify-between px-4 md:px-10  py-3.5 border-slate-400 hover:border-slate-200 transition-all duration-200 shadow-lg shadow-gray-700/30 hover:shadow-gray-700/40 rounded-3xl'>

      {/* <h1 className=' md:text-2xl font-bold'>Study-Planner</h1> */}
      <Logo/>

      <button className='text-xs md:text-lg border border-white/20 cursor-pointer font-semibold rounded-2xl  px-3 md:px-6 py-2 md:py-1 active:scale-90 transition-all duration-300 hover:bg-black/50 hover:translate-y-0.5 '
      onClick={() => setIsFormVisible(true)}
      >Add New Session</button>

    </div>
  )
}

export default Navbar
