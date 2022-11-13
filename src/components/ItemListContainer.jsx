import { useState, useEffect } from "react"
import { data } from "../utils/data"
import ItemList from "./ItemList"
import { customFetch } from "../utils/customFetch"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
const [datos, setDatos]= useState([])
const {idCategory}= useParams()

useEffect(() => {
    if(idCategory == undefined){
      customFetch(2000, data)
      .then(resolve => setDatos(resolve))
      .catch(err => console.log(err))
  } else{
    customFetch(2000, data.filter(item => item.category == idCategory))
      .then(resolve => setDatos(resolve))
      .catch(err => console.log(err))
}
}, [idCategory]);

  return (
    <>
        <ItemList items={datos} />
    </>
  )

}

export default ItemListContainer