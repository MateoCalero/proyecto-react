import { useEffect, useState } from "react"
import { data } from "../utils/data"
import { customFetch } from "../utils/customFetch"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ()=>{
    const [dato,setDato]= useState({})

    useEffect(()=> {
        customFetch(2000,data[2])
        .then(resolve=>setDato(resolve))
        .catch(err=>console.log(err))
    },[])

    
    return (
        <ItemDetail item={dato}/>

    )
}

export default ItemDetailContainer