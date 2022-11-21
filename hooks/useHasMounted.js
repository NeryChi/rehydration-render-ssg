import { useEffect, useState } from "react"
const useHasMounted = () => { // Este componente es el hook personalizado encargado de dar paso libre cuando una interfaz ya ha sido renderizada y esta a la espera de los datos para mostrar
    const [hasMounted, setHasMounted] = useState(false) //Inicialmente el valor del hook personalizado es falso hasta que un evento cambie su estado
    useEffect(() => {
        setHasMounted(true) // El hook useEffect de React cambia el valor del hook personalizado a verdadero cuando la interfaz ya se ha renderizado y los datos estan listos.
    }, [])
    return hasMounted //Este componente retorna el valor actual de la variable 'hasMounted' para impedir o ejecutar el re-renderizado
}
export default useHasMounted