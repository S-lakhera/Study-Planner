import React, { useContext } from 'react'
import SessionForm from './components/SessionForm'
import SessionList from './components/SessionList'
import Navbar from './components/Navbar'
import { SessionContext } from './context/SessionContext'

const App = () => {
  const {isFormVisible} = useContext(SessionContext)
  return (
    <div className='mx-5'>
      <Navbar/>
      <div className='mx-5 md:mx-8'>
        {isFormVisible && <SessionForm/>}
        {/* <SessionForm/> */}
        <SessionList/>
      </div>
    </div>
  )
}

export default App
