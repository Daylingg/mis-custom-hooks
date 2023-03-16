import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({data:null, loading:true, error:null})

    const isMounted = useRef(true)//es verdadero pq se esta mostrando la primera vez cuando se renderiza

    useEffect(() => {
        return()=>{//en el effect el return se llama para desmontar el ref en este caso
            isMounted.current=false
        }
    }, [])
    

    useEffect(()=>{

        setState({data:null, loading:true, error:null})//para q siempre se inicialice en estos datos

        fetch(url)
        .then(res=>res.json())//esta promesa devueve otra promesa con la data
        .then(data=>{

        
                if(isMounted.current){//si esta verdadero puedo llamar el setstate pq ya esta montado...sino no hago nada  pq ya se desmonto
                    setState({
                    loading:false,//pq ya se termino de cargar
                    error:null,//pq si se llego a este punto es q no hay error
                    data
                    })
                }else{
                    console.log('setState no se llamo')
                }
                
            
            
        })

    },[url])//solo se ejecuta el efecto cuando cambia el url

    return state

}
