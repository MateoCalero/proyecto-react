import { useState, useEffect } from "react"
import { data } from "../utils/data"
import ItemList from "./ItemList"


const ItemListContainer = () => {
const [datos, setDatos]= useState([])

useEffect(() => {
    customFetch(2000, data)
      .then(response => setDatos(response))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
        <ItemList items={datos} />
    </>
  )

}

export default ItemListContainer