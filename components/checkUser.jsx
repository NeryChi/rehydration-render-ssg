import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Profile from "./profile";
const CheckUser = () => {
  const [info] = useContext(UserContext)
  document.getElementById('check').className = 'bg-slate-900 opacity-[97%] hover:opacity-[97%] grid grid-cols-1 grid-rows-2 flex justify-center items-center duration-300 col-span-3'
  document.getElementById('bad').className = 'bg-slate-900 hover:opacity-[97%] flex justify-center items-center duration-300 col-span-1'
  return (
    <Profile info={info} />
  )
}
export default CheckUser