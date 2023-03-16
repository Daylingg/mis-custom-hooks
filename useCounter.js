import { useState } from 'react'

export const useCounter = (initialState=10) => {
  
    const [counter, setCounter] = useState(initialState)

    const reset=()=>{
        setCounter(initialState)
    }

    const increment=()=>{
        setCounter( counter + 1 )
    }

    const decrement=()=>{
        setCounter( counter )
    }

    return {//voy a retornar un obj {}...voy a importar las funciones
        counter,
        increment,
        decrement,
        reset
    }
  
}
