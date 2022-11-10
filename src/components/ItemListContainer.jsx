import { useState, useEffect } from "react"
import { data } from "../utils/data"
import ItemList from "./ItemList"
import { customFetch } from "../utils/customFetch"


const ItemListContainer = () => {
const [datos, setDatos]= useState([])

useEffect(() => {
    customFetch(2000, data)
      .then(resolve => setDatos(resolve))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
        <ItemList items={datos} />
    </>
  )

}

export default ItemListContainer