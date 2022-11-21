"use client"
import React, { useState } from 'react'
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
  /*Utilizo una forma de renderizado condicional basado en variables, inicialmente la variable 'badInterface' no tiene nungun valor, por esa razon no
    se muestra nada en la seccion 'bad', es hasta hacer click sobre el componente '<Bad/>' que se invocara a un componente externo que rederizara su contenido*/
  const badclick = () => {
    setCheckInterface() //Utilizo este metodo del useState para dejar la seccion 'check' unicamente con el componente <Check/>
    setBadInterface(<BadUser />) //Usando este metodo le paso un nuevo valor a la variable 'badInterface' para que sea renderizado
  }
  /*Utilizo una forma de renderizado condicional basado en variables*/
  const checkclick = () => {
    setBadInterface()
    setCheckInterface(<CheckUser />)
  }
  return (
    <>
      <UserProvider>
        <header className='h-[8vh] sm:h-[15vh] xl:h-[8vh] bg-[#53AFEE] flex justify-center ' >
          <div className='w-[92%] sm:w-[75%] h-[100%] items-center flex justify-between ' >
            <Logo />
            <p className='p-[1vh] pl-[3vh] pr-[3vh] rounded-t-[5vh] rounded-b-[5vh] text-[2vh] sm:text-[5vh] xl:text-[2.3vh] text-slate-900 bg-white font-bold'>Server Side Rendering</p>
          </div>
        </header>
        <main className='grid grid-cols-4 h-[92vh] sm:h-[85vh] xl:h-[92vh]'>
          <section id='bad' className='bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300 col-span-2'>
            {badInterface/*Esta variable inicialmente esta vacia y esta a la espera de recibir contenido nuevo en cuato se haga click en el componente <Bad/>*/}
            <Bad click={() => badclick()} />
          </section>
          <section id='check' className='bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300 col-span-2'>
            {checkInterface/*Esta variable inicialmente esta vacia y esta a la espera de recibir contenido nuevo en cuato se haga click en el componente <Check/>*/}
            <Check click={() => checkclick()} />
          </section>
        </main>
      </UserProvider>
    </>
  )
}
export default Home