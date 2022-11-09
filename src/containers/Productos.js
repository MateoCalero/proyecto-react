import Video from '../components/Producto'
import { data } from '../utils/data'
import { customFetch } from '../utils/customFetch'
import { useEffect, useState } from 'react'

const Videos = () => {
  const [datos, setDatos] = useState([])

  const deleteItem = (id) => {
    let nuevosDatos = datos.filter(item => item.id != id)
    setDatos(nuevosDatos)
  }

  //componentDidMount
  useEffect(() => {
    customFetch(2000, data)
      .then(response => setDatos(response))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
    {
      datos.map(item => (
        <Video
        key={item.id}
        name={item.name}
        img={item.img}
        description={item.description}
        price={item.price}
        stock={item.stock} />
      ))
    }
    </>
  )
}

export default Videos