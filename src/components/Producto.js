import { useEffect, useState } from 'react';

const Video = (props) => {
    // let rate = 0; // => state (estado)
    const [rate, setRate] = useState(0);    // => HOOK!!!
    const [logued, setLogued] = useState(false)

    const rateVideo = () => {
        setRate(rate+1)
    }

    // componentDidUpdate
    useEffect(() => {
      console.log('El Componente se actualizó')
    }, [rate])

    return (
      <div className="producto-container">
          <div className="producto-image">
          <img src={props.img} alt="Same alt value" />
          </div>
          <div className="producto-info">
          <h3 className='producto-title'>{props.name}</h3>
          <p>{props.description}</p>
          <p className='producto-price'>Precio: ${props.price}</p>
          <p className='producto-stock'>Stock: {props.stock}</p>
          <button className='btn-comprar'>Comprar</button>
          </div>
      </div>
    )
  }
  
  export default Video