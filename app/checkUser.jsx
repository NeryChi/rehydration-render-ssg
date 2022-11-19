import { useEffect, useState } from "react";
import Profile from "./profile";

const CheckUser = () => {

  const [user, setUser] = useState()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const getUser = () => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => dataUser(data)).catch(err => console.log(err))
  }

  const dataUser = (data) => {
    setUser([data.results[0].name, data.results[0].phone, data.results[0].dob, data.results[0].location, data.results[0].email, data.results[0].picture])
  }

  if (user) {
    document.getElementById('check').className = 'bg-slate-900 opacity-[97%] hover:opacity-[97%] grid grid-cols-1 grid-rows-2 flex justify-center items-center duration-300 '
    return <Profile user={user} />
  }

  if (!hasMounted) {
    getUser()
    document.getElementById('check').className = 'bg-slate-900 opacity-[97%] hover:opacity-[97%] grid grid-cols-1 grid-rows-2 flex justify-center items-center duration-300 '
    return <h1>hola</h1>
  }

  return (
    <Profile user={' / '} />
  )
}

export default CheckUser