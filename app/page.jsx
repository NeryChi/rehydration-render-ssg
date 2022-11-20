"use client"
import React, { useState } from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import Bad from '../components/bad'
import Check from '../components/check'
import CheckUser from '../components/checkUser'
import BadUser from '../components/badUser'
import Logo from '../components/logo'
import UserProvider from '../context/userContext'

const Home = () => {

  const [badInterface, setBadInterface] = useState()
  const [checkInterface, setCheckInterface] = useState()

  const badclick = () => {
    setCheckInterface()
    setBadInterface(<BadUser />)
  }

  const checkclick = () => {
    setBadInterface()
    setCheckInterface(<CheckUser />)
  }

  return (
    <>
      <Head>
        <title>Rehydration Render SSG</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserProvider>
        <header className='h-[8vh] bg-[#53AFEE] flex justify-center ' >
          <div className='w-[75%] h-[100%] items-center flex justify-between ' >
            <Logo />
            <p className='text-[2vh]'>Server Side Rendering</p>
          </div>
        </header>
        <main className='grid grid-cols-4 h-[92vh]'>
          <section id='bad' className='bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300 col-span-2'>
            {badInterface}
            <Bad click={() => badclick()} />
          </section>
          <section id='check' className='bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300 col-span-2'>
            {checkInterface}
            <Check click={() => checkclick()} />
          </section>
        </main>
      </UserProvider>
    </>
  )
}

export default Home