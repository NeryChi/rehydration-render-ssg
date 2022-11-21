import { createContext, useState } from "react";
import useHasMounted from "../hooks/useHasMounted";
export const UserContext = createContext()
const UserProvider = ({ children }) => { //Este es un componente de contexo y lo utilizo para obtener los datos del usuario desde que la aplicacion se inicia
  const [user, setUser] = useState('')
  const hasMounted = useHasMounted() // Este Hook personalizado me ayuda a esperar hasta que los datos esten listos y procesarlos de manera correcta para posteriormente servirlos a los componentes hijos del contexto
  const getUser = () => {//Con esta funcion hago una peticion a la API randomuser con fines meramente ilustrativos
    fetch('https://randomuser.me/api/').then((res) => res.json()).then((data) => dataUser(data)).catch(err => console.log(err))
  }
  const dataUser = (data) => { //Esta funcion me ayuda a filtrar los datos que me interesan de la API
    setUser([data.results[0].name, data.results[0].phone, data.results[0].dob, data.results[0].location, data.results[0].email, data.results[0].picture])
  }
  if (!hasMounted) {
    getUser()
  }
  /*Asigno a esta variable los datos que me interesa mostrar pero de no estar disponibles los datos el array interno solo queda con datos vacios 
    (EL objetivo del renderizado desde el servidor es que se muestre algo al usuario cuando aun no hay datos reales para mostrar en la interfaz)*/
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