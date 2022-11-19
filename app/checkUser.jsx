import { useEffect, useState } from "react";
import Profile from "./profile";

let user = ''

const CheckUser = () => {

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {

    setHasMounted(true)
    console.log('no entra al use effect')
    
  }, [])

  if(!hasMounted){
    return null
  }

  const getUser = () => {
    console.log('entro getUser()')
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => dataUser(data)).catch(err => console.log(err))
  }

  const dataUser = (data) => {
    console.log('entro dataUser()')
    
    user = [data.results[0].name, data.results[0].phone, data.results[0].dob, data.results[0].picture]
    console.log(user)
  }

  const vari = getUser()

  if(user){
    console.log('entra al if')
    document.getElementById('check').className = 'bg-slate-900 opacity-[97%] hover:opacity-[97%] grid grid-cols-1 grid-rows-2 flex justify-center items-center duration-300 '
    return (<Profile user={user}/>)
  } else{
    console.log('no entra al if')
  }

  return(
    <div>
      <img src="/delete.png" alt="oh" />
    </div>
  )
}

export default CheckUser