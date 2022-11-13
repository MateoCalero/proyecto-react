import { useEffect, useState } from "react"
import { data } from "../utils/data"
import { customFetch } from "../utils/customFetch"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{
    const [dato,setDato]= useState({})
    const {idItem}= useParams()

    useEffect(()=> {
        customFetch(2000,data.find(item=>item.id ==idItem))
        .then(resolve=>setDato(resolve))
        .catch(err=>console.log(err))
    },[])

    
    return (
        <ItemDetail item={dato}/>

    )
}

export default ItemDetailContainer