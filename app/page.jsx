"use client"
import React, { useState } from 'react'
import '../styles/globals.css'
import Bad from './bad'
import Check from './check'
import CheckUser from './checkUser'
import Login from './login'
import Logo from './logo'

const Home = () => {

  const [badInterface, setBadInterface] = useState()
  const [checkInterface, setCheckInterface] = useState()

  const badclick = () => {
    setCheckInterface()
  }

  const checkclick = () => {
    setCheckInterface(<CheckUser />)
  }

  return (
    <>
      <header className='h-[8vh] bg-[#53AFEE] flex justify-center ' >
        <div className='w-[75%] h-[100%] items-center flex justify-between ' >
          <Logo />
          <Login />
        </div>
      </header>
      <main className='grid grid-cols-2 h-[92vh] w-[100vw]' >
        <section className='bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300'>
          {badInterface}
          <Bad click={() => badclick()} />
        </section>
        <section id='check' className='bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300'>
          {checkInterface}
          <Check click={() => checkclick()} />
        </section>
      </main>
    </>
  )
}

export default Home