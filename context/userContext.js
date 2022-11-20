import { createContext, useEffect, useState } from "react";
import useHasMounted from "../hooks/useHasMounted";

export const UserContext = createContext()

const UserProvider = ({ children }) => {

  const [user, setUser] = useState('')
  const hasMounted = useHasMounted()

  const getUser = () => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => dataUser(data)).catch(err => console.log(err))
  }

  const dataUser = (data) => {
    setUser([data.results[0].name, data.results[0].phone, data.results[0].dob, data.results[0].location, data.results[0].email, data.results[0].picture])
  }

  if (!hasMounted) {
    getUser()
  }

  let info = [
    user[0] ? user[0].first : '',
    user[0] ? user[0].last : '',
    user[1] ? user[1] : '',
    user[2] ? user[2].age + ' años' : '',
    user[3] ? user[3].city + ', ' + user[3].country : '',
    user[5] ? user[5].large : '/transparent.png'
  ]

  return (
    <UserContext.Provider value={[info]} >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider