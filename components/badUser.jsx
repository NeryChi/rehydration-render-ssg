import { useState } from "react";
import useHasMounted from "../hooks/useHasMounted";
const BadUser = () => { // Este componente hace lo mismo que el contexto y el commponente <CheckUser/> pero todo en uno y el renderizado de hace desde el cliente
  const [user, setUser] = useState()
  const hasMounted = useHasMounted()
  const getUser = () => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => dataUser(data)).catch(err => console.log(err))
  }
  const dataUser = (data) => {
    setUser([data.results[0].name, data.results[0].phone, data.results[0].dob, data.results[0].location, data.results[0].email, data.results[0].picture])
  }
  if (user) {
    document.getElementById('bad').className = 'bg-slate-900 opacity-[97%] hover:opacity-[97%] grid grid-cols-1 grid-rows-2 flex justify-center items-center duration-300 col-span-3'
    document.getElementById('check').className = 'bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300 col-span-1'

    let info = [
      user[0] ? user[0].first : '',
      user[0] ? user[0].last : '',
      user[1] ? user[1] : '',
      user[2] ? user[2].age + ' años' : '',
      user[3] ? user[3].city + ', ' + user[3].country : '',
      user[5] ? user[5].large : '/transparent.png'
    ]

    return (
      <div className="grid sm:grid-cols-3 sm:p-[5vw] " >
        <img src={info[5]} alt="User" className="w-[15vh] bg-slate-900 h-[15vh] sm:w-[12vw] sm:h-[12vw] object-cover rounded-[50%] border-4 border-green-500 row-span-2 justify-self-center" />
        <div className="grid pl-[5vw] pr-[5vw] pt-[5vw] sm:pl-0 sm:pr-0 sm:pt-0 justify-self-center sm:justify-self-start sm:col-span-2">
          <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Nombre: <strong className="text-[#53AFEE] ml-[0.7vw]">{`${info[0]} ${info[1]}`}</strong></p>
          <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Teléfono: <strong className="text-[#53AFEE] ml-[0.7vw]">{info[2]}</strong></p>
          <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Edad: <strong className="text-[#53AFEE] ml-[0.7vw]">{info[3]}</strong></p>
          <p className="self-center xl:text-2xl xl:mt-[3%] text-white xl:flex">Dirección: <strong className="text-[#53AFEE] ml-[0.7vw]">{info[4]}</strong></p>
        </div>
      </div>
    )
  }
  if (!hasMounted) {
    getUser()
    document.getElementById('bad').className = 'bg-slate-900 opacity-[97%] hover:opacity-[97%] grid grid-cols-1 grid-rows-2 flex justify-center items-center duration-300 col-span-3'
    document.getElementById('check').className = 'bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300 col-span-1'
    return null
  }
  return (
    null
  )
}
export default BadUser